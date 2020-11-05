import { FootballMatchLoader } from "./FootballMatchLoader";
import { CsvFileReader } from "./CsvFileReader";
import { Summarizer } from "./Summarizer";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { GoalsAnalysis } from "./analyzers/GoalsAnalysis";
import { ConsoleReport } from "./targets/ConsoleReport";
import { HtmlReport } from "./targets/HtmlReport";
import { MatchData } from "./MatchData";

export abstract class Summarize {
  static winsToConsole(team: string, matches: MatchData[]) {
    new Summarizer(
      new WinsAnalysis(team, matches),
      new ConsoleReport()
    ).report();
  }

  static goalsToConsole(team: string, matches: MatchData[]) {
    new Summarizer(
      new GoalsAnalysis(team, matches),
      new ConsoleReport()
    ).report();
  }

  static winsToHtml(team: string, matches: MatchData[], filename: string) {
    new Summarizer(
      new WinsAnalysis(team, matches),
      new HtmlReport(filename)
    ).report();
  }

  static goalsToHtml(team: string, matches: MatchData[], filename: string) {
    new Summarizer(
      new GoalsAnalysis(team, matches),
      new HtmlReport(filename)
    ).report();
  }
}
