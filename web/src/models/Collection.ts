import axios, { AxiosResponse } from "axios";
import { User, UserProps } from "./User";
import { EventManager } from "./EventManager";

export class Collection {
  models: User[] = [];
  events: EventManager = new EventManager();

  constructor(private resourcePath: string) {}

  get on(): Function {
    return this.events.on;
  }

  get trigger(): Function {
    return this.events.trigger;
  }

  fetch() {
    axios.get(this.resourcePath).then((response: AxiosResponse) => {
      this.models = response.data.map(
        (data: UserProps): User => new User(data)
      );
      this.trigger("change");
    });
  }
}
