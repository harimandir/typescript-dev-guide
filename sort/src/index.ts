import { Sorter, Sortable, Greater } from "./Sorter";
import { SortableNumbers } from "./SortableNumbers";
import { SortableString } from "./SortableString";

const numbers = [10, 3, -5, 0];
console.log(`Sorting ${numbers}`);
let sorter = new Sorter(new SortableNumbers(numbers));
console.log(sorter.sort());

const string = [10, 3, -5, 0];
console.log(`Sorting ${numbers}`);
sorter = new Sorter(new SortableString("Xaayb"));
console.log(sorter.sort());
