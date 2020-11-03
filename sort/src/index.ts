import { Sorter, Sortable, Greater } from "./Sorter";
import { SortableNumbers } from "./SortableNumbers";
import { SortableString } from "./SortableString";
import { SortableList, NumberList } from "./SortableList";

const numbers = [10, 3, -5, 0];
console.log(`Sorting ${numbers.toString()}`);
let sorter = new Sorter(new SortableNumbers(numbers));
console.log(sorter.sort());

const string = "Xaayb";
console.log(`Sorting ${string}`);
sorter = new Sorter(new SortableString(string));
console.log(sorter.sort());

const list = new NumberList();
[10, 3, -5, 0].map((val) => list.add(val));
console.log(`Sorting ${list.toString()}`);
sorter = new Sorter(new SortableList(list));
console.log(sorter.sort());
