import { Attributes as ModelAttributes } from "./Model";

export class Attributes<T> implements ModelAttributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  getAll = (): T => {
    return this.data;
  };

  set(props: T): void {
    Object.assign(this.data, props);
  }
}
