import { User, UserProps } from "../models/User";
import { View } from "../views/View";

export class UserForm extends View<User, UserProps> {
  template(): string {
    return `
        <div>
            Name: <input name="name" placeholder="${this.model.get("name")}" />
            <button data-id="set-name">Change Name</button>
            <button data-id="set-age">Randomize Age</button>
            <button data-id="save">Save</button>
        </div>
    `;
  }

  events(): { [key: string]: () => void } {
    return {
      "click:button[data-id=set-name]": this.onChangeNameClick,
      "click:button[data-id=set-age]": this.onRandomizeAgeClick,
      "click:button[data-id=save]": this.onSaveClick,
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

  onSaveClick = (): void => {
    this.model.save();
  };
}
