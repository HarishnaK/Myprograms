
// setTimeout(name,1000)
// function name(){
//     console.log("hari");
// }

var count=0;
let stop=setInterval(num,1000)
function num(){
    var d=new Date()
    console.log(d);
    count++;
    if(count==6)
    {
        clearInterval(stop)
    }
}








