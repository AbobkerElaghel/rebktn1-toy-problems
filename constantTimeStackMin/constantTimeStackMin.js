/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.  

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
<<<<<<< HEAD
class Stack {
  
  constructor() {
    this.storage = {};
    this.size = 0;
    this.minValue;
  }

  push(value) {
  	if(value < this.minValue || !this.minValue)
  		this.minValue = value;

    this.storage[this.size] = value;
    this.size++;
  }

  pop() {

    this.size && this.size--;
    var result = this.storage[this.size];
    delete this.storage[this.size];
    return result;
  }

  size() {
    return this.size;
  }


  min(){
  	return this.minValue;
  }
}
=======
  var Stack = function() {

  // add an item to the top of the stack
    this.push = function(value) {
    };

  // remove an item from the top of the stack
    this.pop = function() {
    };

  // return the number of items in the stack
    this.size = function() {
    };
  
  // return the minimum value in the stack
    this.min = function() {

    };

  };

>>>>>>> d094e0708bb603f175564af45188fa3252d79f0f
