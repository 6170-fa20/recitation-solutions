// Recitation 3
// Purpose of Recitation:
// 	Exploiting scoping and closures to write classes

// Key Ideas
//  6.031: ADTs, RIs, AFs access modifiers
//  Classes, scoping, closures

// ------------------------------------------------ 

// Review scoping
a = 1;
let b = 2;
const c = 3;
var d = 4;

// var is function-scoped
// blocks in JS are denoted with {}, 
// let & const keywords are block-scoped
if (true) {
  var i = 0;
  i++;
};
console.log(i);
// Poll:
// what do you expect the printed value of i to be? --> 
// change the keyword for i with these options in the poll
// (a) 0
// (b) 1
// (c) Reference Error
// (d) Assignment to a constant variable error

// Review closures:
let secret = () => {
	let secretNum = 5;
	let add = (num) => {
		return num + secretNum
	};
	return {
		add,
		get: () => secretNum,
		set: (newSecretNum) => { secretNum = newSecretNum },
	};
};

const mySecret = secret();
// console.log(mySecret.get());   // 5
// console.log(mySecret.add(10)); // 15
// console.log(mySecret.set(20)); // undefined
// console.log(mySecret.get());   // 20
// console.log(mySecret.add(10)); // 30


class UnsafeStack {
	constructor() {
		this._s = [];
	}

	push(value) {
		this._s.push(value);
	}

	pop() {
		const removed = this._s.pop();
		return removed;
	}

	size() {
		return this._s.length;
	}
}

// ATTACKS

// ATTACK 1: Reassign internal `._s` then try calling a method
// s1 = new UnsafeStack()
// s1._s = null
// s1.push("sad")
// FIX: somehow make `._s` const?

// ATTACK 2: Manually modify `._s` to something then call a method
// s2 = new UnsafeStack()
// s2._s.push(["lmao", "sad"])
// s2.size()
// FIX: somehow hide `._s` so the user can't use it

// ATTACK 3: Reassign a method
// s3 = new UnsafeStack()
// s3.push = console.log
// s3.push("this gets printed not pushd")
// s3._s // this is empty!
// FIX: somehow make the methods `const`

// ------------------------------------------------

function SafeStack() {
	// Object.create from the prototype is almost like saying 
	// class A extends B where B is the prototype
	const that = Object.create(SafeStack.prototype);
	const _s = [];

	that.push = (value) => {
		_s.push(value);
	};

	that.pop = () => {
		const removed = _s.pop();
		return removed;
	};

	that.size = () => {
		return _s.length;
	};

	// freeze obj items
	Object.freeze(that);
	return that;
};

// // repeat the attacks from above and see we have safety woohoo
