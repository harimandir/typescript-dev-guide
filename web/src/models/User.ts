import axios, { AxiosResponse } from "axios";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Listeners = {
  [eventName: string]: Handler[];
};

type Handler = () => void;

export class User {
  private listeners: Listeners[] = [];
  private resourcePath: string = "http://localhost:9849/users";

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

  trigger(eventName: string): void {
    const handlers: Handler[] = this.listeners[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach((handler) => handler());
  }

  fetch(): void {
    axios
      .get(`${this.resourcePath}/${this.get("id")}`)
      .then((response: AxiosResponse) => this.set(response.data));
  }

  save(): void {
    const id = this.get("id");
    if (id) {
      axios.put(`${this.resourcePath}/${id}`, this.data);
    } else {
      axios.post(`${this.resourcePath}`, this.data);
    }
  }
}
