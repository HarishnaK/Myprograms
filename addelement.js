var n=document.querySelector("#name")
var add=document.createElement("li")
add.textContent="gayu"
n.append(add)

var create=document.createElement("h1")
create.innerHTML=window.prompt("ENTER YOUR NAME:");
document.body.append(create)

var na=document.querySelector("#name")
var newname=document.createElement("li")
newname.textContent="kd";
na.insertBefore(newname,na.getElementsByTagName("li")[2])

