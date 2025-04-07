
/*
myLinkList={
head:{
  value:10,
  next{
   value:5
     next:{
      value:16,
       next:null
    }
  }
 }
}
*/



class Node {

  constructor(value) {
    this.value = value,
      this.next = null
  }

  /*
   newNode={
      value : value,
      next :null
    }
  */


}

class LinkList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1
  }


  //append node in linklist
  ////10-->15-->20
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode; //{value=10,next=>15}
    this.tail = newNode;//{tail-->15}
    this.length++
    return this;
  }


  //prepend node in linklist
  ////1-->10-->15-->20 
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;

  }


  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }


  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList()
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++
    }
    return currentNode;
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList()
  }

}



const newLinklist = new LinkList(10);
newLinklist.append(20);
newLinklist.append(30);
newLinklist.prepend(5);
//console.log(newLinklist.printList());
newLinklist.insert(2, 12);
console.log(newLinklist.printList());
newLinklist.remove(3);

//console.log(newLinklist.printList());
// console.log(newLinklist);