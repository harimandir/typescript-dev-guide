import { View } from "./View";
import { User as UserModel, UserProps } from "../models/User";
import { UserDetail } from "./UserDetail";
import { UserForm } from "./UserForm";

export class User extends View<UserModel, UserProps> {
  template(): string {
    return `
        <h1>User</h1>
        <div class="user-detail"></div>
        <div class="user-form"></div>
    `;
  }

  contentSelectors() {
    return {
      detail: ".user-detail",
      form: ".user-form",
    };
  }

  onRender(): void {
    new UserDetail(this.contentElements.detail, this.model).render();
    new UserForm(this.contentElements.form, this.model).render();
  }
}
