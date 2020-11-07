import { View } from "./View";
import { User as UserModel, UserProps } from "../models/User";

export class User extends View<UserModel, UserProps> {
  template(): string {
    return `
        <h1>User</h1>
        <div class="user-detail"></div>
        <div class="user-form"></div>
    `;
  }
}
