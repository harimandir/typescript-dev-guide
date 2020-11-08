import { Model } from "../models/Model";

export abstract class View<T extends Model<K>, K> {
  contentElements: { [contentName: string]: Element } = {};

  abstract template(): string;

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  private bindModel(): void {
    this.model.on("change", () => this.render());
  }

  render(): void {
    const templateElement = document.createElement("template");
    const content = templateElement.content;

    templateElement.innerHTML = this.template();
    this.parent.innerHTML = "";

    this.bindEvents(content);
    this.bindContentElements(content);
    this.onRender();
    this.parent.append(content);
  }

  protected bindEvents(fragment: DocumentFragment): void {
    const events = this.events();
    for (let key in events) {
      const [eventName, selector] = key.split(":");
      const elements = fragment.querySelectorAll(selector);
      elements.forEach((element) =>
        element.addEventListener(eventName, events[key])
      );
    }
  }

  events(): { [key: string]: () => void } {
    return {};
  }

  bindContentElements(content: DocumentFragment): void {
    const selectors = this.contentSelectors();

    for (let key in selectors) {
      const element = content.querySelector(selectors[key]);
      if (element) {
        this.contentElements[key] = element;
      }
    }
  }

  onRender(): void {}

  contentSelectors(): { [contentName: string]: string } {
    return {};
  }
}
