export class Attributes<T> {
  constructor(public data: T) {}

  get(prop: string): string | number {
    return this.data[prop];
  }

  set(props: T): void {
    Object.assign(this.data, props);
  }
}
