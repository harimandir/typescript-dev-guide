import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";

const collection = new Collection<User, UserProps>(
  "http://localhost:4995/users",
  (data: UserProps): User => new User(data)
);

collection.on("change", () => console.log(collection));
collection.fetch();
