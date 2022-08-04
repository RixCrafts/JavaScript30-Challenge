// ## Array Cardio Day 1
console.info("Array Cardio Day 1 - JS Loaded");

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
console.log("--------------------------------------");
console.log(inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600));
console.log("--------------------------------------");

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
console.log("--------------------------------------");
console.log(inventors.map(inventor => `${inventor.first} ${inventor.last}`));
console.log("--------------------------------------");

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
console.log("--------------------------------------");
inventors.sort((a, b) => a.year - b.year);
console.log(inventors);
console.log("--------------------------------------");

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
console.log("--------------------------------------");
let yearsLived = inventors.reduce((acc, newVal) => acc + (newVal.passed - newVal.year), 0);
console.log(yearsLived);
console.log("--------------------------------------");

// 5. Sort the inventors by years lived
console.log("--------------------------------------");
inventors.sort((a, b) => (a.passed - a.year) - (b.passed - b.year));
console.log(inventors);
console.log("--------------------------------------");

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// console.log("--------------------------------------");
// let items = [...document.querySelectorAll(".mw-category a")];
// let result = items
//     .filter((item) => item.textContent.includes("de"))
//     .map((item) => item.textContent);
// console.log("--------------------------------------");

// 7. sort Exercise
// Sort the people alphabetically by last name
console.log("--------------------------------------");
people.sort((personA, personB) => personA < personB ? -1 : 1);
console.table(people);
console.log("--------------------------------------");

//7.1
// Present the list in a table with first name first
console.log("--------------------------------------");
let peopleMap = people.map(person => `${person.split(", ")[1]}, ${person.split(", ")[0]}`);
console.table(peopleMap);
console.log("--------------------------------------");

//7.2 sort Exercise
// Sort the people alphabetically by first name
console.log("--------------------------------------");
peopleMap.sort((a, b) =>  a < b ? -1 : 1);
console.table(peopleMap);
console.log("--------------------------------------");

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

console.log("--------------------------------------");
let count = data.reduce((acc, item) => {
    if(!acc[item]){
        acc[item] = 0;
    }
    acc[item]++;
    return acc;
}, {});
console.log(count);
console.log("--------------------------------------");