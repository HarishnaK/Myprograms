// let details=[
//   {id:11593,name:"Shruthika",initial:"S"},
//   {id:11594,name:"Harishna",initial:"K"}]

//   let info=details.map(function(val){
    
//   return val.name;
// })
// console.log(info.get[1]);

var map1=new Map();
map1.set("name1","hari")
map1.set("name2","dharan")
map1.set("name3","shruthi")
map1.set("dob","25")
map1.set("age","21")
console.log("get:" + map1.get("name1"));
console.log("delete:" + map1.delete("name1"));
console.log("has:" + map1.has("name1"));
console.log("clear:" + map1.clear());
console.log(map1);
