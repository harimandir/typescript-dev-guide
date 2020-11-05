import { User } from "../models/User";

console.log("Hello, World!");

const user = new User({ name: "Anon", age: 20 });
user.set({ age: 21 });
console.log(user.get("name"), user.get("age"));
