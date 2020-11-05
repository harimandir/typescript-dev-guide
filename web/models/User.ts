interface UserProps {
  name?: string;
  age?: number;
}

export class User {
  constructor(private data: UserProps = {}) {}

  get(prop: string): string | number {
    return this.data[prop];
  }

  set(props: UserProps): void {
    Object.assign(this.data, props);
  }
}
