import { dateStringToDate } from "../utils";
import { MatchResult } from "../MatchResult";
import { CsvFileReader } from "./CsvFileReader";

type Match = [Date, string, string, number, number, MatchResult, string];

export class FootballMatchCsvFileReader extends CsvFileReader<Match> {
  mapRow(row: string[]): Match {
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
}
