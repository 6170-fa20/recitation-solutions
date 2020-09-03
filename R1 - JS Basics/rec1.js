// Recitation 1 Problem set-up & suggested solution

/* Problem Setup:
 * 	Last few semesters at MIT and you want to only take highly the rated classes
 * 	or the ones with your favorite TA. Want to be able to:
 * 		* Get classes with a minimum rating
 *		* Get classes with a specific TA
 */

/* Code below for the Chrome Console
 * To open console:
 * 		on Mac: Cmd + Option + I
 *		on Windows & Linux: Ctrl + Shift + I
 */ 

// const keyword prevents reassignment of machineLearning variable below
const machineLearning = '6.867';
// Oh wait! I want to take undergrad version!
// machineLearning = '6.036'; // breaks as it should!

const schedule = [];
// Could use array's slice method instead of ...: Reference MDN Docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push and show students MDN docs
schedule.push(machineLearning);
const copyOfSchedule = [...schedule];

console.log('Here is my schedule for the semester: ');
for (let i = 0; i < schedule.length; i++) {
	console.log(schedule[i]);
};
alert(`Here is my schedule for the semester: ${schedule[0]}`);

const Amir = { name: 'Amir Farhat',  email: 'amirf@mit.edu' };
const Emily = { name: 'Emily Hu', email: 'emilyhu@mit.edu' };
const EJ = { name: 'EJ Sefah', email: 'esefah@mit.edu' };
const Dylan = { name: 'Dylan Lewis', email: 'drlewis@mit.edu' };

// schedule = [ml, softwareStudio];
// Oops, schedule is a const!

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

const ml = { name: "Machine Learning", number: "6.867", rating: 6.5, TA: Dylan };
const softwareStudio = { name: "Software Studio", number: "6.170", rating: 7, TA: Emily };
const dataVis = { name: "Data Visualization", number: "6.894", rating: 6, TA: EJ };
const computerNetworks = { name: "Computer Networks", number: "6.829", rating: 5.4, TA: Amir };
newSchedule.push(ml);
newSchedule.push(softwareStudio);
newSchedule.push(dataVis);
newSchedule.push(computerNetworks);

// Dylan switches emails to alum because he graduated
// NOTE: const != immutable
Dylan;
Dylan.email = 'drlewis@alum.mit.edu';
Dylan;

// Function to get the names of all courses of a certain rating
function getCourseNamesWithRatingGreaterThan(schedule, rating = 3.5) {
	const coursesAtRating = [];
	// NOTE: we are using for ... of and not for ... in
	// We can use const keyword below for course because variables declared with const are block-scoped. More on this in Rec 2!
	for (const course of schedule) {
		if (course.rating >= rating) {
			coursesAtRating.push(course.name);
		}
	}
	return coursesAtRating;
}

const highRatedCourses = getCourseNamesWithRatingGreaterThan(newSchedule, 6.5);
console.log(highRatedCourses);

function getCourseNamesWithTA(schedule, TAName) {
	const coursesWithTA = [];
	for (const course of schedule) {
		if (course.TA !== null && course.TA.name === TAName) {
			coursesWithTA.push(course.name);
		}
	}
	return coursesWithTA;

	// Alternate solution (more on this in Recitation 2!):
	// return schedule.filter((c) => c.TA && c.TA.name === TAName);
}

// Use a function to get the names of all courses of with a TA
console.log(getCourseNamesWithTA(newSchedule, Dylan.name));
console.log(getCourseNamesWithTA(newSchedule, Emily.name));
console.log(getCourseNamesWithTA(newSchedule, EJ.name));
console.log(getCourseNamesWithTA(newSchedule, Amir.name));





















