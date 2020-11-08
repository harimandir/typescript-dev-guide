import { User as UserView } from "./views/User";
import { User as UserModel } from "./models/User";

const root = document.getElementById("root");
if (root) {
  const user = new UserView(
    root,
    UserModel.getInstance({ name: "Morgan", age: 42 })
  );
  user.render();
} else {
  throw new Error("root element not found in document");
}
