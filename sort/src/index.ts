import { Sorter, Sortable, Greater } from "./Sorter";
import { SortableNumbers } from "./SortableNumbers";

const numbers = [10, 3, -5, 0];
console.log(`Sorting ${numbers}`);
const sorter = new Sorter(new SortableNumbers(numbers));
console.log(sorter.sort());
