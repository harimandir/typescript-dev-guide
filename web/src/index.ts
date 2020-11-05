import { User } from "../models/User";

console.log("Hello, World!");

const user = new User({ name: "Anon", age: 20 });

user.on("change", () => console.log("change 1"));
user.on("change", () => console.log("change 2"));
user.on("something", () => console.log("something"));

user.trigger("change");
user.trigger("nothing");
