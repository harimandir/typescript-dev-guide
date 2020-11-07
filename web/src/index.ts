import { UserForm } from "./views/UserForm";
import { User } from "./models/User";

const form = new UserForm(
  document.getElementById("root"),
  new User({ name: "Morgan", age: 42 })
);
form.render();
