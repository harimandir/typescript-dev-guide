import fs from "fs";
import { OutputTarget } from "../Summarizer";

export class HtmlTarget implements OutputTarget {
  constructor(public filename: string) {}
  print(content: string): void {
    const html = `<html>
  <body>
    ${content}
  </body>
</html>
`;
    fs.writeFileSync(this.filename, html);
  }
}
