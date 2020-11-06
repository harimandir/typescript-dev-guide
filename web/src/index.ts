import { User } from "./models/User";

const user = new User({ name: "Unborn", age: 0 });

user.on("change", () => console.log("something changed"));
user.trigger("change");
