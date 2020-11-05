import { FootballMatchLoader } from "./FootballMatchLoader";
import { CsvFileReader } from "./CsvFileReader";
import { MatchData } from "./MatchData";

export class Loader {
  constructor(public filename: string) {}

  matches(): MatchData[] {
    const fileReader = new CsvFileReader(this.filename);
    const loader = new FootballMatchLoader(fileReader);
    loader.load();
    return loader.data;
  }
}
