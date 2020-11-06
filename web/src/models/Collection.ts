import { User } from "./User";
import { EventManager } from "./EventManager";

export class Collection {
  models: User[] = [];
  events: EventManager = new EventManager();

  get on(): Function {
    return this.events.on;
  }

  get trigger(): Function {
    return this.events.trigger;
  }
}
