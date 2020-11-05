import { User } from "../models/User";

console.log("Hello, World!");

const user = new User({ name: "Anon", age: 20 });

user.on("change", () => {});
user.on("change", () => {});
user.on("something", () => {});

console.log(user);
