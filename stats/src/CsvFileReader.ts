import fs from "fs";
import { dateStringToDate } from "./utils";

export class CsvFileReader {
  public data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, "utf-8")
      .split("\n")
      .map((row: string) => row.split(","))
      .map((row: string[]): any => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5],
        ];
      });
  }
}
