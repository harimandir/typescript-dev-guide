import { Collection } from "./../views/Collection";
import { User, UserProps } from "../models/User";
import { UserDetail } from "./UserDetail";

export class Users extends Collection<User, UserProps> {
  renderItem(parent: Element, user: User): void {
    new UserDetail(parent, user).render();
  }
}
