import { User } from "../models/User";

export abstract class View {
  abstract events(): { [key: string]: () => void };
  abstract template(): string;

  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  private bindModel(): void {
    this.model.on("change", () => this.render());
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

    if (this.parent.firstElementChild) {
      this.parent.replaceChild(content, this.parent.firstElementChild);
    } else {
      this.parent.append(content);
    }
  }
}
