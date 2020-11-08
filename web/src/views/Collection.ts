import { Collection as Model } from "./../models/Collection";

export abstract class Collection<T, K> {
  abstract renderItem(parent: Element, model: T): void;

  constructor(public parent: Element, protected model: Model<T, K>) {}

  render(): void {
    const templateElement = document.createElement("template");
    const content = templateElement.content;
    this.parent.textContent = "";

    this.model.models.map((user) => {
      const itemElement = document.createElement("div");
      this.renderItem(itemElement, user);
      content.append(itemElement);
    });

    this.parent.append(content);
  }
}
