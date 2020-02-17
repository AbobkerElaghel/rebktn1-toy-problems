/*
Queue Stack

Write a stack. Once you’re done, implement a queue using two stacks to create FIFO behavior. 
The queue should not have any storage separate from its stacks.
*/

const Stack = function() {
  let storage = [];

  this.push = function(value) {
    storage.push(value);
    return value;
  };

  this.pop = function() {
    return storage.pop();
  };

  this.size = function() {
    return storage.length;
  };
};

const Queue = function() {
  let inbox = new Stack();
  let outbox = new Stack();

  this.enqueue = function(value) {
    inbox.push(value);
  };
  this.dequeue = function() {
    debugger
    if(outbox.size()){
      return outbox.pop();
    }else if (inbox.size()){
      for (let i = 0; i < inbox.size() - 1 ; i++) {
        outbox.push(inbox.pop());
      }
      return outbox.pop();
    }else{
      throw new Error("The Queue is Empty");
    }
  };
  this.size = function() {
    return inbox.size() + outbox.size();
  };
};


let stack = new Stack();


stack.push(1);stack.push(1);stack.push(1);
console.log(stack.size());