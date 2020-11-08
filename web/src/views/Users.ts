import { Collection } from "./../views/Collection";
import { User, UserProps } from "../models/User";

export class Users extends Collection<User, UserProps> {
  render(): void {
    const templateElement = document.createElement("template");
    const content = templateElement.content;
    this.parent.textContent = "";

    this.model.models.map((user) => {
      this.renderItem(templateElement, user);
    });

    this.parent.append(content);
  }

  renderItem(parent: Element, user: User): void {
    const templateElement = document.createElement("template");
    const content = templateElement.content;

    templateElement.innerHTML = `
    <div class="row">
      <div class="col-1">Name: ${user.get("name")}</div>
      <div class="col-2">Age: ${user.get("age")}</div>
    </div>
`;

    this.parent.append(content);
  }
}
