import express from "express";
import { router } from "./routes/login";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["signing-key", "verification-key-1", "verification-key-2", "..."],
  })
);
app.use(router);

app.listen(3000, () => console.log("Listening on port 3000"));
