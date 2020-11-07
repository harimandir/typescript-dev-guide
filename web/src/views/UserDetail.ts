import { View } from "./View";
import { User as UserModel, UserProps } from "../models/User";

export class UserDetail extends View<UserModel, UserProps> {
  template(): string {
    return `
        <div>Name: ${this.model.get("name")}</div>
        <div>Age: ${this.model.get("age")}</div>
    `;
  }
}
