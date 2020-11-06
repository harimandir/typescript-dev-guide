import axios, { AxiosPromise } from "axios";
import { Sync, Props } from "./Model";

export class DbSync<T extends Props> implements Sync<T> {
  constructor(private resourcePath: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.resourcePath}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;
    if (id) {
      return axios.put(`${this.resourcePath}/${id}`, data);
    } else {
      return axios.post(`${this.resourcePath}`, data);
    }
  }
}
