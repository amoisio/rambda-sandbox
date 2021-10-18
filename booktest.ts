import * as R from 'ramda';
import IBook, { data } from './books.js';

const publishedInYear = (book: IBook, year: number) : boolean => book.year === year;
const titlesForYear = (books: IBook[], year: number) : string[] => {
    const selected = R.filter(book => publishedInYear(book, year), data);
    return R.map(book => book.title, selected);
}

console.log("All books");
console.table(data);

console.log("Titles");
console.table(titlesForYear(data, 2020));
