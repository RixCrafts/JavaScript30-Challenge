// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
let someAdult = people.some(person => (new Date().getFullYear()) - person.year >= 19);

console.log({ someAdult });

// Array.prototype.every() // is everyone 19 or older?
let allAdults = people.every(person => (new Date().getFullYear()) - person.year >= 19);

console.log({ allAdults });

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
let finder = comments.find(comment => comment.id === 823423);

console.log({ finder });

// Array.prototype.findIndex()
// Find the comment with this ID
let index = comments.findIndex(comment => comment.id === 823423);

console.log({index});
console.table(comments);

// delete the comment with the ID of 823423
comments.splice(index,1);

console.table(comments);

// create a new array from comments with the elements in the position 0, 2, 3 
let newComments = [
    ...comments.slice(0,1),
    ...comments.slice(2)
];

console.table(newComments);
