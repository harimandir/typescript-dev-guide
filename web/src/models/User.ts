import { EventManager } from "./EventManager";
import { Sync } from "./Sync";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  events = new EventManager();
  sync: Sync;
  private resourcePath: string = "http://localhost:3000/users";

  constructor(private data: UserProps = {}) {
    this.sync = new Sync(this.resourcePath);
  }

  get(prop: string): string | number {
    return this.data[prop];
  }

  set(props: UserProps): void {
    Object.assign(this.data, props);
  }
}
