import { SortableNumbers } from "./SortableNumbers";
import { SortableString } from "./SortableString";
import { SortableList, NumberList } from "./SortableList";

const numbers = [10, 3, -5, 0];
console.log(`Sorting ${numbers.toString()}`);
console.log(new SortableNumbers(numbers).sort());

const string = "Xaayb";
console.log(`Sorting ${string}`);
console.log(new SortableString(string).sort());

const list = new NumberList();
[10, 3, -5, 0].map((val) => list.add(val));
console.log(`Sorting ${list.toString()}`);
console.log(new SortableList(list).sort());
