// Recitation 1 Problem set-up
// This file exists for the TA's to reference for recitation 1, but all code during recitation should be written
// to the chrome console so students can learn how to use it.

// Purpose of Recitation:
// 	Showcase different elements of JS

// Key Ideas: variables, data types
// Key Ideas: array initialization & array methods
// Key Ideas: iterative structures in JS, JS built-ins
// Key Ideas: Objects, properties, & nesting
// Key Ideas: functions, conditionals, accessing properties of objects

/*
* Problem Idea:
* 1. Save each class your taking this semester as a string in a variable | Key Ideas: variables, data types
* 2. Save schedule as an array of courses | Key Ideas: array initialization & array methods
* 3. Print the full schedule | Key Ideas: iterative structures in JS, JS built-ins
* 4. Store more info about the courses you're taking using JS objects | Key Ideas: Objects, properties, & nesting
* 5. Use a function to get the names of all courses of a certain rating | Key Ideas: functions, conditionals, accessing properties of objects
* 6. Use a function to get the names of all courses of with a TA | Key Ideas: functions, conditionals, accessing properties of objects
*/

// Problem Setup:
// 	Last few semesters at MIT and you want to only take highly the rated classes
// 	or the ones with your favorite TA. Want to be able to:
// 		* Get classes with a minimum rating
// 		* Get classes with a specific TA

// Example code for the Chrome Console
// (1)
const machineLearning = '6.867';
// Oh wait! I want to take undergrad version!
// machineLearning = '6.036'; // breaks as it should!
// (2)
const schedule = [];
// Could use slice instead of ...: Reference MDN Docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push and show students MDN docs
schedule.push(machineLearning);
const copyOfSchedule = [...schedule];

// (3)
console.log('Here is my schedule for the semester: ');
for (let i = 0; i < schedule.length; i++) {
	console.log(schedule[i]);
};
alert(`Here is my schedule for the semester: ${schedule[0]}`);

// (4)
const Amir = { name: 'Amir Farhat',  email: 'amirf@mit.edu' };
const Emily = { name: 'Emily Hu', email: 'emilyhu@mit.edu' };
const EJ = { name: 'EJ Sefah', email: 'esefah@mit.edu' };
const Dylan = { name: 'Dylan Lewis', email: 'drlewis@mit.edu' };

// schedule = [ml, softwareStudio];
// Oops, schedule is a const!

// pushing inline-created objects
const newSchedule = [];
newSchedule.push({
	name: "Introduction to Computer Science Programming in Python",
	number: "6.0001",
	rating: 5.3,
	TA: null,
});
newSchedule.push({
	name: "Elements of Software Construction",
	number: "6.031",
	rating: 5.4,
	TA: null,
});

// pushing already created objects
let ml = { name: "Machine Learning", number: "6.867", rating: 6.5, TA: Dylan };
// STUDENTS SHOULD ADD THEIR OWN CLASSES
let softwareStudio = { name: "Software Studio", number: "6.170", rating: 7, TA: Emily };
let dataVis = { name: "Data Visualization", number: "6.894", rating: 6, TA: EJ };
let computerNetworks = { name: "Computer Networks", number: "6.829", rating: 5.4, TA: Amir };
newSchedule.push(ml);
newSchedule.push(softwareStudio);
newSchedule.push(dataVis);
newSchedule.push(computerNetworks);

// Dylan switches emails to alum because he graduated
// NOTE: const != immutable
Dylan;
Dylan.email = 'drlewis@alum.mit.edu';
Dylan;

// (5) Function to get the names of all courses of a certain rating
function getCourseNamesWithRatingGreaterThan(schedule, rating = 3.5) {
	let coursesAtRating = [];
	// NOTE: we are using for ... of and not for ... in
	for (const course of schedule) {
		if (course.rating >= rating) {
			coursesAtRating.push(course.name);
		}
	}
	return coursesAtRating;
}

highRatedCourses = getCourseNamesWithRatingGreaterThan(newSchedule, 6.5);
console.log(highRatedCourses);

// STUDENTS SHOULD IMPLEMENT THIS
function getCourseNamesWithTA(schedule, TAName) {
	// expected answer
	let coursesWithTA = [];
	for (const course of schedule) {
		if (course.TA !== null && course.TA.name === TAName) {
			coursesWithTA.push(course.name);
		}
	}
	return coursesWithTA;

	// // super answer
	// return schedule.filter((c) => c.TA && c.TA.name === TAName);
}

// (6) Use a function to get the names of all courses of with a TA
console.log(getCourseNamesWithTA(newSchedule, Dylan.name));
console.log(getCourseNamesWithTA(newSchedule, Emily.name));
console.log(getCourseNamesWithTA(newSchedule, EJ.name));
console.log(getCourseNamesWithTA(newSchedule, Amir.name));





















