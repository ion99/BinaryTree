function Node(value, left, right){
  
  this.value = value;
  this.left = left;
  this.right = right;
}

function get(){
  
  return this.value
}

function Tree(){

  this.root = null;
  this.add = add;
}

function add(value){

  let node = new Node(value, null, null);
  
  if (this.root === null){
    this.root = node;
  } else {

    let current = this.root;

    while(true){

      if (current.value > value){

        // Go left!
        if (current.left){

          current = current.left;
        } else {

          current.left = node;

          break;
        }
      } else {

        // Go right!
        if (current.right){

          current = current.right;
        } else {

          current.right = node;

          break;
        }
      }
    }
  }
  return this;
}