function sum(a, b) {  
  console.log(this === window); // => true
  this.myNumber = 20; 
  return a + b;
}
// 함수 문맥으로 실행된 sum()
// this in sum() is a global object (window)
sum(15, 16);     // => 31  
window.Number; // => 20  

var calc = {  
  num: 0,
  increment: function() {
    console.log(this === calc); // => true
    this.num += 1;
    return this.num;
  }
};
// method invocation. this is calc
calc.increment(); // => 1  
calc.increment(); // => 2 
