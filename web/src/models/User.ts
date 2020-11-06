import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { DbSync } from "./DbSync";
import { EventManager } from "./EventManager";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User extends Model<UserProps> {
  constructor(data: UserProps = {}) {
    super(
      new Attributes<UserProps>(data),
      new DbSync<UserProps>("/users"),
      new EventManager()
    );
  }
}
