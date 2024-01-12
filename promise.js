var busavailable=false;
let bus=new Promise((avail,stop)=>{
if(busavailable)
    avail()
else
    stop()
})

bus.then((avail)=>{
    console.log("7 buses are available");
}).catch((stop)=>{
    console.log("sorry 34 waiting list");
}).finally((thankyou)=>
{
console.log("Thank you!");
})

async function hari()
{
    console.log("hello guys");
    wait = await busavailable
    console.log(wait);
    console.log("tatta bye bye");
}
hari()