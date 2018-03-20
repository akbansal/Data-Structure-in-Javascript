//******************************************************************
function linkedListNode(value){
  this.data = value;
  this.next = null;
}
function linkedList(){
  this._head = null;
  this.size = 0;
}
linkedList.prototype.addNode = function(val){
  var node = new linkedListNode(val),
     currentNode = this._head;
  if(this._head === null){
    this._head = node;
  }else{
    while(currentNode.next !== null){
      currentNode = currentNode.next;
    }  
    currentNode.next = node;
  }
  this.size++;
};
linkedList.prototype.removeNodeWithValue = function(val){
  var currentNode = this._head;
      previousNode = this._head;

  if(this._head === null){
    console.log("Linked List is empty.");
  }else{
    while(currentNode){
      if(currentNode.data === val){
        console.log(" Value " + val + " found in Linked List");
        if(currentNode === previousNode){
          this._head = currentNode.next;
        }else{
          previousNode.next = currentNode.next;
        }
        return;
      }else{
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
    }
    console.log(" Value " + val + " not found in Linked List");
  }
  this.size--;
}
//For Simplicity,, index should be provided from 1 onward (not 0 onward)
linkedList.prototype.retrieveNodeAtIndex = function(index){
  var currentNode = this._head, 
      i=0;
  if(index < 1 || index > this.size){
    console.log("Index is Out Of bound");
  }
  else{
    for(;i < index-1; i++){
      currentNode = currentNode.next;
    } 
  }
 console.log("Value at index " + index + " is = " + currentNode.data);
}

linkedList.prototype.size = function(){
   return this.size;
}
linkedList.prototype.print = function(val){
  var currentNode = this._head;
  var result = "PRINT :: ";
  if(this.size > 0){
    while(currentNode){
      result = result + currentNode.data;
      currentNode = currentNode.next;
      if(currentNode){
       result = result + " --> "; 
      }
    }
    console.log(result);
  }else{
    console.log("PRINT :: Linked List is empty.");
  }
}
// var mylinkedList = new linkedList();
// mylinkedList.print();
// for (var i=0 ; i<arr.length; i++){
//   mylinkedList.addNode(arr[i]);
// }
// mylinkedList.print();
// mylinkedList.retrieveNodeAtIndex(6);
// mylinkedList.removeNodeWithValue(9);
// mylinkedList.print();
//******************************************************************



/**
 * Javascript Implementation.
 * SinglyLinkedList.
 */

var _ = require('underscore');

function Node(val) {
  this.data = val;
  this.next = null;
}

function Linkedlist () {
  this.head = null;
  this.size = 0;
}
Linkedlist.prototype.add = function(data) {
  console.log("Adding data "+ data + " in linkedlist.");
  const node = new Node(data);
  if(this.head === null){
    this.head = node;
    this.size++;
  } else {
    let temp = this.head;
    while(temp.next !== null){
      temp = temp.next;
    }
    temp.next = node;
    this.size++;
  }
}
Linkedlist.prototype.remove = function(data) {
  console.log("Removing data "+ data + " in linkedlist.");
  if(this.head === null){
    console.log("Linked list is empty..");
  } else {
    let currentNode = this.head;
    let prevNode = this.head;
    while(currentNode.next !== null){
      if(currentNode.data === data){
        prevNode.next = currentNode.next;
        break;
      }
      else{
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
    }
    this.size--;
  }
}

Linkedlist.prototype.print = function() {
  console.log("printing...");
  let temp = this.head;
  if(temp === null){
    console.log("Linked list is empty..");
  }
  while(temp !== null){
    console.log(temp.data);
    temp = temp.next;
  }
}

Linkedlist.prototype.printReverse = function(){
  console.log("Printing in reverse Order");
  if(this.head === null){
    console.log("linkedList is empty");
  }else{
    printReverseRecursive(this.head);
  }
}

function printReverseRecursive(head){
  if(head === null){
    return;
  }else{
    printReverseRecursive(head.next);
    console.log(head.data);
  }
}

Linkedlist.prototype.removeDuplicate = function() {
  console.log("Removing Duplicate...");
  let currentNode = this.head;
  let prevNode = this.head;
  let map = {};
  if(currentNode === null){
    console.log("Linked list is empty..");
  }
  while(currentNode.next !== null){
    if(!map[currentNode.data]){
      map[currentNode.data] = 1;
      prevNode = currentNode;
      currentNode = currentNode.next;
    }else{
      //remove this node
      prevNode.next = currentNode.next;
      currentNode = currentNode.next;
      this.size--;
    }
  }
}

Linkedlist.prototype.kthToLast = function(k) {
  console.log("Finding " + k + "th to Last node in Linkedlist...");
  let currentNode = this.head;
  let prevNode = this.head;
  if(currentNode === null){
    console.log("Linked list is empty..");
    return;
  }
  if(k > this.size){
    console.log("Out of Bound exception");
    return;
  }
  for(let index = 0; index < k; index++) {
    currentNode = currentNode.next;
  }
  console.log("current node is pointing to - " + currentNode.data);
  console.log("prev node is pointing to - " + prevNode.data);
  while(currentNode.next !== null){
    prevNode = prevNode.next;
    currentNode = currentNode.next;
  }
  console.log(k+ "thToLast data is = " +prevNode.data);
}


let linkedlist = new Linkedlist();
linkedlist.print();
linkedlist.add(4);
linkedlist.add(8);
linkedlist.add(8);
linkedlist.add(10);
linkedlist.add(10);
linkedlist.add(20);
linkedlist.add(30);
linkedlist.add(30);
linkedlist.add(40);
linkedlist.print();
//linkedlist.removeDuplicate();
//linkedlist.print();
//linkedlist.kthToLast(10);
linkedlist.printReverse();