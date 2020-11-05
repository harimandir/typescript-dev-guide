import { Report } from "./Reports";
import { Summarizer } from "../Summarizer";
import { WinsAnalysis } from "../analyzers/WinsAnalysis";
import { GoalsAnalysis } from "../analyzers/GoalsAnalysis";
import { MatchData } from "../MatchData";
import { HtmlTarget } from "../targets/HtmlTarget";

export class HtmlReport implements Report {
  constructor(
    public team: string,
    public matches: MatchData[],
    public filename: string
  ) {}

  wins(): void {
    new Summarizer(
      new WinsAnalysis(this.team, this.matches),
      new HtmlTarget(this.filename)
    ).report();
  }

  goals() {
    new Summarizer(
      new GoalsAnalysis(this.team, this.matches),
      new HtmlTarget(this.filename)
    ).report();
  }
}
