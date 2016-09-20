
//******************************************************************
function Node(value){
  this.nodeValue = value;
  this.leftNode = null;
  this.rightNode = null;
}
function BST(){
  this.rootNode = null;
}
BST.prototype.addNode = function(val){
  var treeNode = new Node(val),
      _root = this.rootNode;  

  if(_root === null){
    console.log("Adding First time node as root Node = " + val);
    this.rootNode = treeNode;
    return;
  }

  while(_root !== null){
    if(_root.nodeValue >= treeNode.nodeValue){
      if(_root.leftNode === null){
        console.log("Adding node "+val + " as left Node of " + _root.nodeValue);
        _root.leftNode = treeNode;
        break;
      }else{
        _root = _root.leftNode;  
      }
    }else{
      if(_root.rightNode === null){
        console.log("Adding node "+val + " as right Node of " + _root.nodeValue);
        _root.rightNode = treeNode;
        break;
      }else{
        _root = _root.rightNode;  
      }
    }
  }
};
BST.prototype.findNode = function(val){
  var _root = this.rootNode;  

  if(_root === null){
    console.log("Tree is empty.");
    return;
  }

  while(_root !== null){
    if(_root.nodeValue === val){
      console.log("Found "+ val + " in BST Tree");
      return;
    }
    if(_root.nodeValue > val){
      if(_root.leftNode === null){
        console.log(val + " Not found in BST Tree");
        return;
      }else{
        _root = _root.leftNode;  
      }
    }else{
      if(_root.rightNode === null){
        console.log(val + " Not found in BST Tree");
        return;
      }else{
        _root = _root.rightNode;  
      }
    }
  }
};
BST.prototype.inOrderTraversal = function(rootNode){
  if(rootNode === null){
    return null;
  }
  this.inOrderTraversal(rootNode.leftNode);
  console.log(rootNode.nodeValue);
  this.inOrderTraversal(rootNode.rightNode);
}
BST.prototype.preOrderTraversal = function(rootNode){
  if(rootNode === null){
    return null;
  }
  console.log(rootNode.nodeValue);
  this.inOrderTraversal(rootNode.leftNode);
  this.inOrderTraversal(rootNode.rightNode);
}
BST.prototype.postOrderTraversal = function(rootNode){
  if(rootNode === null){
    return null;
  }
  this.inOrderTraversal(rootNode.leftNode);
  this.inOrderTraversal(rootNode.rightNode);
  console.log(rootNode.nodeValue);
}
// var treeObj = new BST();
// //Construct the BST Tree.
// for (var i=0 ; i<arr.length; i++){
//   treeObj.addNode(arr[i]);  
// }
//Traverse BST
//treeObj.inOrderTraversal(treeObj.rootNode);
//treeObj.findNode(100);
//******************************************************************

