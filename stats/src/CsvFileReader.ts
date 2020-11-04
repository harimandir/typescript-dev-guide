import fs from "fs";

export class CsvFileReader {
  public data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, "utf-8")
      .split("\n")
      .map((row: string) => row.split(","));
  }
}
