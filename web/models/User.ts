interface UserProps {
  name?: string;
  age?: number;
}

type EventListeners = {
  [eventName: string]: Callback[];
};

type Callback = () => void;

export class User {
  private listeners: EventListeners[];

  constructor(private data: UserProps = {}) {}

  get(prop: string): string | number {
    return this.data[prop];
  }

  set(props: UserProps): void {
    Object.assign(this.data, props);
  }

  on(eventName: string, callback: Callback): void {}
}