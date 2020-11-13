import express from "express";
import { AppRouter } from "./AppRouter";
import "./controllers/RootController";
import "./controllers/AuthenticationController";
import "./controllers/AuthenticatedController";

import bodyParser from "body-parser";
import cookieSession from "cookie-session";

const app = express();
app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(
    cookieSession({
      keys: ["signing-key", "verification-key-1", "verification-key-2", "..."],
    })
  )
  .use(AppRouter.getInstance());

app.listen(3000, () => console.log("Listening on port 3000"));
