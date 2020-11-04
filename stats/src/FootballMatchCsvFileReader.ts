import fs from "fs";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

type Match = [Date, string, string, number, number, MatchResult, string];

export class FootballMatchCsvFileReader {
  public data: Match[] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, "utf-8")
      .split("\n")
      .map((row: string) => row.split(","))
      .map(
        (row: string[]): Match => {
          return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6],
          ];
        }
      );
  }
}
