import { Attributes } from "./Attributes";
import { EventManager } from "./EventManager";
import { Sync } from "./Sync";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  data: Attributes<UserProps> = new Attributes<UserProps>();
  events: EventManager = new EventManager();
  sync: Sync<UserProps> = new Sync<UserProps>("http://localhost:3000/users");

  constructor(data: UserProps = {}) {
    this.data.set(data);
  }
}
