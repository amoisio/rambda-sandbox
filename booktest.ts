import * as R from 'ramda';
import IBook, { data } from './books.js';

console.log("All books");
console.table(data);

console.log("Version 1");
{ 
    const publishedInYear = (book: IBook, year: number): boolean => 
        book.year === year;

    const titlesForYear = (books: IBook[], year: number): string[] => {
        const selected = R.filter(book => publishedInYear(book, year), books);
        return R.map(book => book.title, selected);
    }
    console.table(titlesForYear(data, 2020));
}

console.log("Version 2 : Simplify 'filter' statement");
{ 
    const publishedInYear = (year: number) : (book: IBook) => boolean => 
        (book: IBook) => book.year === year;

    const titlesForYear = (books: IBook[], year: number): string[] => {
        const selected = R.filter(publishedInYear(year), books);
        return R.map(book => book.title, selected);
    }
    console.table(titlesForYear(data, 2020));
}

console.log("Version 3 : Using partial apply on the original publishedInYear function");
{
    const publishedInYear = (book: IBook, year: number): boolean =>
        book.year === year;

    const titlesForYear = (books: IBook[], year: number): string[] => {
        const selected = R.filter(R.partialRight(publishedInYear, [year]), books);
        return R.map(book => book.title, selected);
    }
    console.table(titlesForYear(data, 2020));
}

console.log("Version 4 : Using curry on convenient-parameter-ordered publishedInYear function");
{
    const publishedInYear = R.curry((year: number, book: IBook): boolean =>
        book.year === year);

    const titlesForYear = (books: IBook[], year: number): string[] => {
        const selected = R.filter(publishedInYear(year), books);
        return R.map(book => book.title, selected);
    }
    console.table(titlesForYear(data, 2020));
}

console.log("Version 5 : Using flip+curry on the original publishedInYear function");
{
    const publishedInYear = R.flip(R.curry((book: IBook, year: number): boolean =>
        book.year === year));

    const titlesForYear = (books: IBook[], year: number): string[] => {
        const selected = R.filter(publishedInYear(year), books);
        return R.map(book => book.title, selected);
    }
    console.table(titlesForYear(data, 2020));
}

console.log("Version 6 : Using curry+placeholder on the original publishedInYear function");
{
    const publishedInYear = R.curry((book: IBook, year: number): boolean =>
        book.year === year);

    const titlesForYear = (books: IBook[], year: number): string[] => {
        const selected = R.filter(publishedInYear(R.__, year), books);
        return R.map(book => book.title, selected);
    }
    console.table(titlesForYear(data, 2020));
}

console.log("Version 7 : First pipeline");
{
    const publishedInYear = R.curry((year: number, book: IBook): boolean =>
        book.year === year);

    const titlesForYear = (books: IBook[], year: number): string[] =>
        R.pipe<IBook[], IBook[], string[]>(
            R.filter<IBook>(publishedInYear(year)),
            R.map(book => book.title)
        )(books);
    
    console.table(titlesForYear(data, 2020));
}

console.log("Version 8 : Ramdafyed version of the pipeline");
{
    const publishedInYear = R.curry((year: number, book: IBook): boolean =>
        book.year === year);

    const titlesForYear = R.curry((year: number, books: IBook[]): string[] =>
        R.pipe<IBook[], IBook[], string[]>(
            R.filter<IBook>(publishedInYear(year)),
            R.map(book => book.title)
        )(books));

    console.table(titlesForYear(2020, data));
}
