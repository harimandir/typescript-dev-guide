import { FootballMatchLoader } from "./FootballMatchLoader";
import { CsvFileReader } from "./CsvFileReader";
import { Summarizer } from "./Summarizer";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { GoalsAnalysis } from "./analyzers/GoalsAnalysis";
import { ConsoleReport } from "./targets/ConsoleReport";
import { HtmlReport } from "./targets/HtmlReport";

const loader = new FootballMatchLoader(new CsvFileReader("football.csv"));
loader.load();
const matches = loader.data;

const consoleReport = new ConsoleReport();
const team = "Chelsea";
let summarizer = new Summarizer(
  new WinsAnalysis(team, matches),
  consoleReport
).report();

summarizer = new Summarizer(
  new GoalsAnalysis(team, matches),
  consoleReport
).report();

let htmlReport = new HtmlReport("wins.html");
summarizer = new Summarizer(
  new WinsAnalysis(team, matches),
  htmlReport
).report();

htmlReport = new HtmlReport("goals.html");
summarizer = new Summarizer(
  new GoalsAnalysis(team, matches),
  htmlReport
).report();
