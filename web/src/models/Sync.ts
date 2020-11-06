import axios, { AxiosPromise } from "axios";
import { UserProps } from "./User";

export class Sync {
  constructor(public resourcePath: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.resourcePath}/${id}`);
  }

  save(data: UserProps): AxiosPromise {
    const { id } = data;
    if (id) {
      return axios.put(`${this.resourcePath}/${id}`, data);
    } else {
      return axios.post(`${this.resourcePath}`, data);
    }
  }
}
