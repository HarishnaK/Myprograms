console.log("ANONYMOUS FUNCTION");
(function()
{
    console.log("hii hariii");
})();

console.log("ANONYMOUS WITH VARIABLE DECLARATION");
var data=(function()
{
    console.log("hii hariii");
})
data();

console.log("ANONYMOUS USING ARGUMENTS");
var dat=(function(name)
{
    console.log(name);
})
dat("harik")

// console.log("Anonymous object as a function argument");
// function details(use){
//     console.log("name:" +use.name+  ",age:" +use.age);
// } 
// details({name:"harishna",age:21});

// console.log("Anonymous object as an array element");
// let student=[
//     {name:"hari",age:21},
//     {name:"shruthi",age:20},
//     {name:"dharani",age:20}
// ];
// console.log(student[0].name);

// console.log(" Anonymous object as a property value in another object");
// var frnd={
//     name:{frnd1:"dharani",age:21},
//     name1:{frnd2:"shruthi",age:20}
// }
// console.log(frnd.name.frnd1);
// console.log(frnd.name1.age);