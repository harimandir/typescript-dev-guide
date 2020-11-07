import { User } from "../models/User";

export class UserForm {
  constructor(public parent: Element, public model: User) {}

  template(): string {
    return `
        <div>
            <h1>User Form</h1>
            <div>Name: ${this.model.get("name")}</div>
            <div>Age: ${this.model.get("age")}</div>
            <input /> <button>Button</button>
        </div>
    `;
  }

  onButtonClick(): void {
    console.log("button clicked");
  }

  onHeaderMouseover(): void {
    console.log("header mouseover");
  }

  events(): { [key: string]: () => void } {
    return {
      "click:button": this.onButtonClick,
      "mouseover:h1": this.onHeaderMouseover,
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

  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    const content = templateElement.content;
    this.bindEvents(content);
    this.parent.append(content);
  }
}
