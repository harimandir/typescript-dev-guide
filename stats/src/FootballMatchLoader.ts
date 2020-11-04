import { CsvFileReader } from "./CsvFileReader";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

interface DataReader {
  data: string[][];
  read(): void;
}

type Match = [Date, string, string, number, number, MatchResult, string];

export class FootballMatchLoader {
  public data: Match[] = [];

  constructor(public dataReader: DataReader) {}

  load(): void {
    this.dataReader.read();
    this.data = this.dataReader.data.map(
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
