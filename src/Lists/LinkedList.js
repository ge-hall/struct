'use strict';


class Node {
  constructor(_value) {
    this.value = _value;
    this.next = null;
    this.parent = null;
    this.sibling = null;
  }

}

export default class LinkedList {

  constructor() {
    this.head = null;
    //this.current = null;
    this.tail = null;
  }

  insert(_value) {
    const newNode = new Node(_value);
    if (this.head === null) {
      this.head  = newNode;
    }
    else{
      let cur = head;
      while(cur.next != null)
        cur = cur.next;
      cur.next = newNode;
    }
    

  }

  get(index){
    if(index >= this.length())
    throw Error('index beyond end of list');
    if(index < 0)
    throw Error('index must be zero or positive');
    let counter = 0, cur = this.head;
    while( counter < index){
      cur = cur.next;
      counter++;
    }
    return cur.value;
  }
  length() {
    let counter = 0, cur = this.head;
    while(cur !== null&& counter < 10){
      console.log(cur);
      cur = cur.next;
      counter++;
    }
    return counter;
    
  }
  toString() {
    let str = '';
    let cur = this.head;

    while (cur != null) {
      //str = str.concat( `${cur.value}\n`);
      str += `${cur.value}\n`;
      cur = cur.next;
    }
    return str;
  }

}