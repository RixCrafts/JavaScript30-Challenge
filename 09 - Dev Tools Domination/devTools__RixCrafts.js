const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
let me = "RixCrafts";

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

console.groupCollapsed("Info types");

// Regular
console.log("Log in regular form");

// Interpolated
console.log(`Log interpolation using backtips by ${me}`);
console.log("Old fashion interpolation, also by %s", me);

// Styled
console.log("%c Styles in the log ", "color: #ee00ee; background-color: darkblue; font-size: 1.5rem;");

// warning!
console.warn("This is a warning!.. Not everything is a 'log'");

// Error :|
console.error("This is an Error Message")

// Info
console.info("This is helpfull Info");

// Debug
console.debug("This is a debug, and i don't know what it does")

console.groupEnd();
//---------------------------------------------------
console.groupCollapsed("Testing");

// Testing
console.assert(1 === 2, "Where are not alike!!!");

console.groupEnd();

// clearing
// console.clear();

console.groupCollapsed("DOM elements visualization");
// Viewing DOM Elements
let p = document.querySelector("p");
console.log(p);
console.dir(p);
console.groupEnd();

// Grouping together
console.group("Standard Group");
console.log("Log in group");
console.info("Info  in group");
console.warn("Warning  in group");
console.groupEnd();

console.log("No in the group");

console.groupCollapsed("Collapsed Group");
console.log("Log in collapsed group");
console.info("Info in collapsed group");
console.warn("Warning  in collapsed group");
console.groupEnd();

console.groupCollapsed("Counting");

// counting
console.count("Rix");
console.count("Rix");
console.count("Rix");
console.count("Rix");
console.count("Rix");
console.count("Rix");
console.count("Crafts");
console.count("Crafts");
console.count("Crafts");
console.count("Crafts");
console.count("Crafts");
console.count("Crafts");

console.countReset("Rix");
console.count("Rix");
console.count("Crafts");

console.groupEnd();

//------------------------------------------------

console.groupCollapsed("Timing");

// timing
// Default timer
console.time()
let firstName = "Richard";
let lastName = "Garcia";
console.log(`${firstName} ${lastName}`)
console.timeEnd();

// Labeled timer
console.time("Routine 1")
let count = 0;
while (count < 100) { count++ }
console.timeEnd("Routine 1");

console.groupEnd();

console.groupCollapsed("Tabulation");

// Table

console.table(dogs);

console.groupEnd();