import { Collection as Model } from "./../models/Collection";

export abstract class Collection<T, K> {
  render(): void {}
  abstract renderItem(parent: Element, model: T): void;
  constructor(public parent: Element, protected model: Model<T, K>) {}
}
