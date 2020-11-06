import { User } from "./models/User";

const user = new User({ name: "Unknown" });

user.on("save", () => console.log("user saved"));

user.save();
