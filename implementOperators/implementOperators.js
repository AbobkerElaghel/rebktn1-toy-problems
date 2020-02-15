/*
Implement Operators

Write three functions to replace the multiply, divide, and modulo operators. 
The only operators you may only use in your solution are addition and subtraction. 
Your functions will only have to handle integer math.

EXAMPLES:
  multiply(5, 2) // 10
  divide(5, 2) // 2
  modulo(5, 2) // 1
*/

const multiply = (x, y) => {
  // your code here...
    if (x > 0 && y > 0 || x < 0 && y < 0){
        let acc = x;
        for (let i = 1; i < Math.abs(y) ; i++) {
            x+=acc;
        }
        return Math.abs(x);
    }else if( x < 0 ){
        let acc = x;
        for (let i = 1; i < y; i++) {
            x+=acc;
        }
        return x;
    }else {
        let acc = y;
        for (let i = 1; i < x; i++) {
            y+=acc;
        }
        return y;
    }

};

const divide = (x, y) => {
    let counter = 0;
    x = Math.abs(x);
    y = Math.abs(y);
    while (x >= y) {
        x -= y;
        counter++;
    }

    return counter;
};

    // if(x > 0 && y > 0 || x < 0 && y < 0){
    //
    // }  else  if(x < 0 || y < 0){
    //     while (x >= y){
    //         x-=y;
    //         counter++;
    //     }
    //     return -counter;
    // }
    // };

// const modulo = (x, y) => {
//   // your code here...
// };


console.log(divide(11,-2));