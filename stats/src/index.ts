import { Loader } from "./Loader";
import { ConsoleReport } from "./reports/ConsoleReport";
import { HtmlReport } from "./reports/HtmlReport";

const team = "Chelsea";
const matches = new Loader("football.csv").matches();

new ConsoleReport(team, matches).wins();
new ConsoleReport(team, matches).goals();

new HtmlReport(team, matches, "wins.html").wins();
new HtmlReport(team, matches, "goals.html").goals();
