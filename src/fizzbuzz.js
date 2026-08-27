function fizzbuzz(a) {
  if(a%3 != 0 && a%5 != 0) {
    return a;
  }
  else if(a%3 === 0 && a%5 != 0){
    return "Fizz";
  }
  else if(a%3 != 0 && a%5 === 0){
    return "Buzz";
  }
  else if(a%3 === 0 && a%5 === 0){
    return "FizzBuzz";
  }
}

export default fizzbuzz;