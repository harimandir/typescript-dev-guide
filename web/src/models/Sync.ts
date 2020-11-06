import axios, { AxiosPromise } from "axios";

interface Props {
  id: number;
}

export class Sync<T extends Props> {
  constructor(public resourcePath: string) {}

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
