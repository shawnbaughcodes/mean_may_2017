module.exports = function (){
  return {
    add: function(num1, num2) {
         // add code here
         console.log('The Sum is', num1 + num2);
    },
    multiply: function(num1, num2) {
         // add code here
         console.log('The answer is', num1 * num2);
    },
    square: function(num) {
         // add code here
         console.log('The answer is', Math.sqrt(num));
    },
    random: function(num1, num2) {
         // add code here
         numba1 = Math.ceil(num1)
         numba2 = Math.ceil(num2)
         console.log(Math.floor(Math.random() * (numba2 - numba1) + numba1 ));
    }
  }
};
