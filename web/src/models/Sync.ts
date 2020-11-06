import axios, { AxiosResponse } from "axios";

export class Sync {
  private resourcePath: string = "http://localhost:3000/users";

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
