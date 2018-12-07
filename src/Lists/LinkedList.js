'use strict';


class Node {
  constructor(_value) {
    this.value = _value;
    this.next = null;
    this.parent = null;
    this.sibling = null;
  }

}

class LinkedList {

  constructor() {
    this.head = null;
    //this.current = null;
    this.tail = null;
  }

  add(_value) {
    const newNode = new Node(_value);
    if (this.head === null) {
      this.head = this.tail = newNode;
    }
    this.tail = this.tail.next = newNode;

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