import { AxiosResponse } from "axios";
import { Attributes } from "./Attributes";
import { EventManager } from "./EventManager";
import { Sync } from "./Sync";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  protected data: Attributes<UserProps>;
  protected events: EventManager = new EventManager();
  protected sync: Sync<UserProps> = new Sync<UserProps>(
    "http://localhost:4995/users"
  );

  constructor(data: UserProps = {}) {
    this.data = new Attributes<UserProps>(data);
  }

  get get(): Function {
    return this.data.get;
  }

  get on(): Function {
    return this.events.on;
  }

  get trigger(): Function {
    return this.events.trigger;
  }

  set(props: UserProps): void {
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
}
