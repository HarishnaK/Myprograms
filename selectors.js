var foods =document.getElementById("food-menu")
foods.style.backgroundColor="red";
var li = document.getElementsByTagName("li")
li[1].style.backgroundColor="pink"

var candy=document.getElementsByClassName("candy")
candy[0].style.backgroundColor="red";

var food=document.getElementsByName("food")
food.forEach((food)=>{
    if(food.checked)
    console.log(food.value);

})


var query=document.querySelectorAll(".candy");
query.forEach(query=>{
query.style.backgroundColor="orange";
})



var que=document.querySelector(".candy")
que.style.backgroundColor="yellow"