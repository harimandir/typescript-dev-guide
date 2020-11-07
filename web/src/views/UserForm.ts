import { User } from "../models/User";

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.model.on("change", () => this.render());
  }

  template(): string {
    return `
        <div>
            <h1>User Form</h1>
            <div>Name: ${this.model.get("name")}</div>
            <div>Age: ${this.model.get("age")}</div>
            <input /> <button>Button</button>
            <button data-id="set-age">Randomize Age</button>
        </div>
    `;
  }

  events(): { [key: string]: () => void } {
    return {
      "click:button[data-id=set-age]": this.onRandomizeAgeClick,
    };
  }

  bindEvents(fragment: DocumentFragment): void {
    const events = this.events();
    for (let key in events) {
      const [eventName, selector] = key.split(":");
      const elements = fragment.querySelectorAll(selector);
      elements.forEach((element) =>
        element.addEventListener(eventName, events[key])
      );
    }
  }

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
