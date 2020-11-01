import { User } from "./User";
// import { Company } from "./Company";
import { Map } from "./Map";

const user = new User();

const map = new Map("map");
map.addUserMarker(user);
