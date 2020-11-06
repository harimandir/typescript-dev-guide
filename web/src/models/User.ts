import axios, { AxiosResponse } from "axios";
import { EventManager } from "./EventManager";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  events = new EventManager();
  private resourcePath: string = "http://localhost:3000/users";

  constructor(private data: UserProps = {}) {}

  get(prop: string): string | number {
    return this.data[prop];
  }

  set(props: UserProps): void {
    Object.assign(this.data, props);
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
