/*
Sorted Insert

Given a sorted stack of integers (smallest integer at the top) and an element to insert, write a function – sortedInsert(stack, element) – which inserts the element into the correct position of the stack.

sortedInsert should manipulate the original stack and return the original stack.

The stack will have the methods:
  • isEmpty
  • peek
  • push
  • pop. 
  
You can also use count to view how many elements are in the stack. 
The stack implementation is available to view below.
*/

// the stack class is exposed here for reference, you may or may not utilize additional stacks in your algorithm.

const Stack = function(initialValue) {
  this.store = {};
  this.count = 0;

  if (initialValue !== undefined) {
    this.push(initialValue);
  }
};

Stack.prototype.isEmpty = function() {
  return !this.count;
};

Stack.prototype.peek = function() {
  return this.store[this.count];
};

Stack.prototype.push = function(val) {
  this.store[++this.count] = val;
};

Stack.prototype.pop = function() {
  if (!this.isEmpty()) {
    const tmp = this.store[this.count];
    delete this.store[this.count--];
    return tmp;
  }
};

function sortedInsert(stack, element) {

}

const binarySearch = (array, target, count) => {
  let startIndex = 0;
  let endIndex = array.length - 1;
  let middleIndex;
  let  counter;
  while(startIndex <= endIndex) {
    middleIndex = Math.floor((startIndex + endIndex) / 2);
    if(target === array[middleIndex]) {
      return middleIndex;
    }
    if(target > array[middleIndex]) {
      console.log("Searching the right side of Array");
      startIndex = middleIndex + 1;
    }
    if(target < array[middleIndex]) {
      console.log("Searching the left side of array");
      endIndex = middleIndex - 1;
    }
    if( Math.floor(Math.log2(count)) === counter) {
      return middleIndex+1;
    }
    else {
      console.log("Not Found this loop iteration. Looping another iteration.")
      counter++;
    }
  }
  return null;
};