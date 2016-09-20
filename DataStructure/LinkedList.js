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