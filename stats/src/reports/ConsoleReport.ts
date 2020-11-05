import { Report } from "./Reports";
import { Summarizer } from "../Summarizer";
import { WinsAnalysis } from "../analyzers/WinsAnalysis";
import { GoalsAnalysis } from "../analyzers/GoalsAnalysis";
import { MatchData } from "../MatchData";
import { ConsoleTarget } from "../targets/ConsoleTarget";

export class ConsoleReport implements Report {
  constructor(public team: string, public matches: MatchData[]) {}

  wins(): void {
    new Summarizer(
      new WinsAnalysis(this.team, this.matches),
      new ConsoleTarget()
    ).report();
  }

  goals() {
    new Summarizer(
      new GoalsAnalysis(this.team, this.matches),
      new ConsoleTarget()
    ).report();
  }
}
