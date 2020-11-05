interface UserProps {
  name?: string;
  age?: number;
}

type Listeners = {
  [eventName: string]: Handler[];
};

type Handler = () => void;

export class User {
  private listeners: Listeners[] = [];

  constructor(private data: UserProps = {}) {}

  get(prop: string): string | number {
    return this.data[prop];
  }

  set(props: UserProps): void {
    Object.assign(this.data, props);
  }

  on(eventName: string, handler: Handler): void {
    const listeners = this.listeners[eventName] || [];
    listeners.push(handler);
    this.listeners[eventName] = listeners;
  }
}
