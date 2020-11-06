import { User } from "./models/User";

const user = new User({ name: "Unborn", age: 0 });

user.events.on("change", () => console.log("something changed"));
user.events.trigger("change");
