import { User, UserProps } from "../models/User";
import { View } from "../views/View";

export class UserForm extends View<User, UserProps> {
  template(): string {
    const name = this.model.get("name");

    return `
        <div>
            <h1>User Form</h1>
            <div>Name: ${name}</div>
            <div>Age: ${this.model.get("age")}</div>
            Name: <input name="name" placeholder="${name}" />
            <button data-id="set-name">Change Name</button>
            <button data-id="set-age">Randomize Age</button>
        </div>
    `;
  }

  events(): { [key: string]: () => void } {
    return {
      "click:button[data-id=set-name]": this.onChangeNameClick,
      "click:button[data-id=set-age]": this.onRandomizeAgeClick,
    };
  }

  onChangeNameClick = (): void => {
    const input = this.parent.querySelector(
      "input[name=name]"
    ) as HTMLInputElement;
    const name = input.value;
    this.model.set({ name });
  };

  onRandomizeAgeClick = (): void => {
    this.model.randomizeAge();
  };

  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    const content = templateElement.content;
    this.bindEvents(content);

    if (this.parent.firstElementChild) {
      this.parent.replaceChild(content, this.parent.firstElementChild);
    } else {
      this.parent.append(content);
    }
  }
}
