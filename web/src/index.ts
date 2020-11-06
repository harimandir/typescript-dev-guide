import { Collection } from "./models/Collection";

const collection = new Collection("http://localhost:4995/users");

collection.on("change", () => console.log(collection));
collection.fetch();
