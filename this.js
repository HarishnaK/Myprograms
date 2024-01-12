// console.log("Implicit binding");
// const person = {
// 	name: "harishna",
// 	age: 21,
// 	hari: function(){
// 		return `Hello ${this.name}, you are ${this.age} years old`
// 	}
// }
// console.log(person.hari());

// console.log("Explicit binding");
// function ageVerify(){
// 	if(this.age> 18){
// 		console.log("Yes you can drive");
// 	} else {
// 		console.log("No you cannot drive");
// 	}
// }
// const per1 = {age: 21};
// const per2 = {age: 16};
// ageVerify.call(per1);
// ageVerify.call(per2);


// console.log("Arrow function binding");
// const person = {
// 	name: "harishna",
// 	age: 21,
// 	hari : () =>{
// 		return `Hello , you are ${this.age} years old`
// 	}
// }
// console.log(person.hari());


console.log("Default function");
const age = 21;
function verifyAge (){
	return this.age;
}

console.log(verifyAge());
