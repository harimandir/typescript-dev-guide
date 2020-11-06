import axios, { AxiosResponse } from "axios";
import { EventManager } from "./EventManager";

export class Collection<T, K> {
  models: T[] = [];
  events: EventManager = new EventManager();

  constructor(
    private resourcePath: string,
    private deserialize: (json: K) => T
  ) {}

  get on(): Function {
    return this.events.on;
  }

  get trigger(): Function {
    return this.events.trigger;
  }

  fetch() {
    axios.get(this.resourcePath).then((response: AxiosResponse) => {
      this.models = response.data.map((data: K): T => this.deserialize(data));
      this.trigger("change");
    });
  }
}
