import { AxiosPromise, AxiosResponse } from "axios";

export interface Attributes<T> {
  get<K extends keyof T>(key: K): T[K];
  getAll(): T;
  set(props: T): void;
}

export interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

export interface Props {
  id?: number;
}

export interface Events {
  on(eventName: string, handler: EventHandler): void;
  trigger(eventName: string): void;
}

export type EventHandler = () => void;

export abstract class Model<T extends Props> {
  protected constructor(
    private data: Attributes<T>,
    private sync: Sync<T>,
    private events: Events
  ) {}

  get get(): Function {
    return this.data.get;
  }

  get on(): Function {
    return this.events.on;
  }

  get trigger(): Function {
    return this.events.trigger;
  }

  set(props: T): void {
    this.data.set(props);
    this.events.trigger("change");
  }

  fetch(): void {
    const id = this.get("id");
    if (typeof id !== "number") {
      throw new Error("Cannot fetch data for user without id");
    }
    this.sync
      .fetch(id)
      .then((response: AxiosResponse): void => this.set(response.data));
  }

  save(): void {
    this.sync
      .save(this.data.getAll())
      .then((response: AxiosResponse): void => this.trigger("save"))
      .catch((): void => this.trigger("error"));
  }
}
