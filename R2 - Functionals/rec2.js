// Recitation 2

// Purpose of Recitation:
// 	Showcase and give practice with functionals

// Key Ideas
//  Functionals

// ------------------------------------------------ STEP 1

// From last time, we've defined *named* functions 
//  but we can define *anonymous* functions.
// These will be useful as functionals!
// Example: add function

// normal add
function (a,b) { return a+b; }

// arrow add with body
(a,b) => { return a+b; }

// arrow add without body
(a,b) => a+b;

// Discourage using the "normal add" form because:
//  (1): `function foo() {}` desugars to `var foo = function() {}` when 
//        we can instead use the superior `const foo = function() {}`
//  (2): arrow functions help to bind `this` in classes, the "normal" form doesn't

// ------------------------------------------------ STEP 2

const schedule = [
    { name: "Machine Learning", number: "6.867", rating: 6.5 },
    { name: "Software Studio", number: "6.170", rating: 7 },
    { name: "Data Visualization", number: "6.894", rating: 6 },
    { name: "Computer Networks", number: "6.829", rating: 5.4}
];

// normal function definition
function normal_GetCourseNamesWithRatingGreaterThan(schedule, rating) {
	let coursesAtRating = [];
	for (const course of schedule) {
		if (course.rating >= rating) {
			coursesAtRating.push(course.name);
		}
	}
	return coursesAtRating;
}

// normal function definition with a forEach
function normalForEach_GetCourseNamesWithRatingGreaterThan(schedule, rating) {
	let coursesAtRating = [];
	schedule.forEach(course => {
		if (course.rating >= rating) {
			coursesAtRating.push(course.name);
		}		
	});
	return coursesAtRating;
}

// arrow with body function definition
let arrowWithBody_GetCourseNamesWithRatingGreaterThan = (schedule, rating) => {
    let coursesAtRating = [];
	for (const course of schedule) {
		if (course.rating >= rating) {
			coursesAtRating.push(course.name);
		}
	}
	return coursesAtRating;
};

// arrow without body function definition - super solution
let arrowWithoutBody_GetCourseNamesWithRatingGreaterThan = (schedule, rating) => schedule.filter((item) => item.rating >= rating);

// ------------------------------------------------ STEP 3
// TOPIC: FUNCTIONALS (HIGHER ORDER FUNCTIONS)
//  * Functionals are functions that take functions as arguments
//  * In JS, functions are first class objects:
//      - Can assign functions to variables
//      - Can pass functions as arguments
//      - Can returns functions as results

// ------------------------------------------------ STEP 4

let words = ['6.170', 'recitation', 'is', 'great']; 

// forEach
// list.forEach( (item, idx) => {...})
// forEach : Array → undefined

// forEach: log each item in the format '1. 6.170'
words.forEach((item, idx) => { console.log(`${idx+1}. ${item}`) } );

// map
// list.map( (item, idx) => {...})
// map : Array →  Array (same length)

// map: add a ! to each word
words.map((item) => { return item + '!' } ); // return is not necessary

// filter
// list.filter( (item, idx) => {...})
// filter : Array → Array (number of satisfying items)

// filter: return a list of all words with less than 6 characters
words.filter((item) => { return item.length < 6 } );

// reduce
// list.reduce( (accumulator, item, idx) => {...}, initialValue)
// reduce : Array → Object (same type as accumulator and initialValue)

// reduce: combine the words into one string separated by spaces
words.reduce((acc, item) => { acc += ' ' + item; return acc; }, '' );

// ------------------------------------------------ STEP 5

// students do fiddle number 1
// https://jsfiddle.net/drlewis/tnumgwkc/12/

// Given tasks and their durations, calculate the total time for all
// tasks that took more than 2 hours to complete.

// ------------------------------------------------ STEP 6

// Pros and Cons of functionals & abstracted iteration

// + Easier to reuse an iteration pattern
// + Reference items rather than indices (fewer mistakes!)
// + Custom iterators: e.g., "for each neighbor"

// - Cannot easily break (throw an exception, use Array.some() or Array.every())


// ------------------------------------------------ STEP 6

// students do fiddle number 2
// https://jsfiddle.net/drlewis/95aty4mn/1/


// EXTRA JS ARRAY YUMMIES
// Array.prototype.concat()
// Array.prototype.entries()
// Array.prototype.every()
// Array.prototype.some()
// Array.prototype.fill()
// Array.prototype.find()
// Array.prototype.findIndex()
// Array.prototype.flat()
// Array.prototype.join()
// Array.prototype.reduceRight()
// Array.prototype.reverse()
// Array.prototype.shift()
// Array.prototype.sort()
// Array.prototype.splice()
