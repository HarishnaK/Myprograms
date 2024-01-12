// function doSomethingAsync(callback) {
//     // Simulating an asynchronous operation, like fetching data from a server
//     setTimeout(function() {
//       console.log("Task completed!");
//       callback(); // Calling the callback function after the task is done
//     }, 1000);
//   }
  
//   function onComplete() {
//     console.log("Callback executed!");
//   }
  
//   // Using doSomethingAsync with a callback
//   doSomethingAsync(onComplete);
  



function shruthi(kd)
{
  console.log("main fun:hiiii shruthi");
  kd()
}
function dharani(hariii){
  console.log("hii dharan");
hariii()
}
function hari()
{
  console.log("callback fun:hiii hariii");
}
shruthi(hari)
dharani(hari)

