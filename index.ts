import * as R from 'ramda';
import INote, { data } from './data.js';
    
// Ultimate task: Display all incomplete items sorted by user (asc) and then by duedate (desc)

// 0. Display all items
console.log("All items");
console.table(data);

// First: Incomplete items
const incomplete = R.filter(R.whereEq({ complete: false }));
console.log("Incomplete items");
console.table(incomplete(data));

// Second: Sort by username asc, dueDate desc
const sorted = R.sortWith<INote>([
    R.ascend(R.prop("username")),
    R.descend(R.prop("dueDate"))
]);
console.log("Sorted items");
console.table(sorted(data));

// Third: combine
const sortedIncomplete = R.compose<INote[], INote[], INote[]>(sorted, incomplete);
console.log("Sorted incomplete items");
console.table(sortedIncomplete(data));
