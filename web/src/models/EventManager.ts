export type Listeners = {
  [eventName: string]: Handler[];
};

export type Handler = () => void;

export class EventManager {
  private listeners: Listeners[] = [];

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
}
