import { User } from "./models/User";

const user = new User({ name: "Unknown" });

console.log(user.get("name"));

user.on("change", () => console.log("User data changed"));
user.set({ age: 111 });
