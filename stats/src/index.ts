import { Loader } from "./Loader";
import { Summarize } from "./Factories";

const team = "Chelsea";
const matches = new Loader("football.csv").matches();

Summarize.winsToConsole(team, matches);
Summarize.goalsToConsole(team, matches);

Summarize.winsToHtml(team, matches, "wins.html");
Summarize.goalsToHtml(team, matches, "goals.html");
