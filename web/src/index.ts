import { Users as UsersView } from "./views/Users";
import { User } from "./models/User";

const root = document.getElementById("root");
if (root) {
  const users = User.getCollection();
  const view = new UsersView(root, users);
  users.on("change", () => view.render());
  users.fetch();
} else {
  throw new Error("root element not found in document");
}
