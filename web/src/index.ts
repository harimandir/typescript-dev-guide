import { UserForm } from "./views/UserForm";
import { User } from "./models/User";

const root = document.getElementById("root");
if (root) {
  const form = new UserForm(
    root,
    User.getInstance({ name: "Morgan", age: 42 })
  );
  form.render();
} else {
  throw new Error("root element not found in document");
}
