/**
 * 1. Using a function
 */
function ShirtOne(color, size) {
	this.color = color;
	this.size = size;
	// This is an Anti-Pattern !!
	//Defining this function outside the class pollutes the global namespace.
	this.getInfo = getShirtInfo;
}
function getShirtInfo() {
	return `${this.color} ${this.size} shirt.`;
}
//Instantiating red shirt object
let redShirt = new ShirtOne("red", "medium");
console.log(redShirt.getInfo());

/*
1.1 Methods defined internally
Using this method prevents the global namespace from being polluted.
However the method getInfo is recreated everytime you create a new object.
*/
function ShirtTwo(color, size) {
	this.color = color;
	this.size = size;
	this.getInfo = function () {
		return `${this.color} ${this.size} shirt.`;
	};
}
//instantiating blue shirt object
let blueShirt = new ShirtTwo("blue", "small");
console.log(blueShirt.getInfo());
/**
 * 1.2 Methods added to the prototype
 * Using this method prevents getInfo from being recreated everyime you create a new object.
 */
function ShirtThree(color, size) {
	this.color = color;
	this.size = size;
}
// Adds methods to the prototype of the constructor function.
ShirtThree.prototype.getInfo = function () {
	return `${this.color} ${this.size} shirt`;
};

let yellowShirt = new ShirtThree("yellow", "large");
console.log(yellowShirt.getInfo());
/**
 * 2. Using object literals
 * Using method simulates a singleton, meaning there is but one instantiation.
 */
let shoes = {
	color: "red",
	size: "9",
	getInfo: function () {
		return `${this.color} ${this.size} shoes`;
	},
};
console.log(shoes.getInfo());
/**
 * 3. Singleton using a function
 * This method is a combination of the other two methods.
 * You can use a function to define a singleton object.
 */
let pants = new (function () {
	this.color = "red";
	this.size = "medium";
	this.getInfo = function () {
		return `${this.color} ${this.size} pants.`;
	};
})();

console.log(pants.getInfo());

/**
 * 4.  Using class keyword
 */
class Sock {
	constructor(color, size) {
		this.color = color;
		this.size = size;
		this.getInfo = function () {
			return `${this.color} ${this.size} socks`;
		};
	}
}
let mySocks = new Sock("green", "small");
console.log(mySocks.getInfo());
