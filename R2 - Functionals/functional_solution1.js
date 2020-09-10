// duration in minutes
const monday = [
	{
  	'name': '6.170 Class',
    'duration': 90
  }, 
	{
  	'name': '6.170 Assignment 1',
    'duration': 120
  }, 
  {
  	'name': 'sleep', 
    'duration': 480
  }
];

const tuesday = [
	{
  	'name': '6.170 Assignment 2',
    'duration': 240
  }, 
  {
  	'name': 'sleep', 
    'duration': 500
  },
  {
  	'name': 'eat', 
    'duration': 30
  }
];

const tasks = [monday, tuesday];

// TODO: Return the the total time spent on tasks that took 2 hr or more    

/* HINT
	 1. Flatten to a single list
   2. Transform duration from minutes to hours
   3. Find tasks that took 2 hr or more
   4. Add up the hours in these tasks
*/ 

// SOLUTION
const result = tasks.flat()
        .map(task => task.duration / 60.0)
        .filter(duration => duration >= 2)
        .reduce((total, duration) => total + duration, 0);

console.log(result)

