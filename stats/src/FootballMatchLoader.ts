import { dateStringToDate } from "./utils";
import { MatchData } from "./MatchData";
import { MatchResult } from "./MatchResult";

interface DataReader {
  data: string[][];
  read(): void;
}

export class FootballMatchLoader {
  public data: MatchData[] = [];

  constructor(public dataReader: DataReader) {}

  load(): void {
    this.dataReader.read();
    this.data = this.dataReader.data.map(
      (row: string[]): MatchData => {
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
