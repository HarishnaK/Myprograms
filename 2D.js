// Using rest parameters to handle variable number of arguments
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(1, 2));          
  console.log(sum(1, 2, 3, 4, 5));    
  console.log(sum());                 
  
  // Rest parameters can be used alongside regular parameters
  function example(a, b, ...rest) {
    console.log(`a: ${a}`);
    console.log(`b: ${b}`);
    console.log(`rest: ${rest}`);
  }
  
  example(1, 2, 3, 4, 5);
  

  