import { EventManager } from "./EventManager";
import { Sync } from "./Sync";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  events = new EventManager();
  sync = new Sync();

  constructor(private data: UserProps = {}) {}

  get(prop: string): string | number {
    return this.data[prop];
  }

  set(props: UserProps): void {
    Object.assign(this.data, props);
  }
}
