import { EventManager } from "./EventManager";
import { Sync } from "./Sync";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  events: EventManager = new EventManager();
  sync: Sync<UserProps> = new Sync<UserProps>("http://localhost:3000/users");

  constructor(private data: UserProps = {}) {}

  get(prop: string): string | number {
    return this.data[prop];
  }

  set(props: UserProps): void {
    Object.assign(this.data, props);
  }
}
