'use strict';
// @flow

/**
 * A Node element for LinkedList
 */
class Node {
  value:number
  next:Node
  constructor(_value:number) {
    this.value = _value;
    
  }

}

/**
 * @class LinkedList
 * is a singly linked list
 */
export default class LinkedList {

  head:Node
  /**
   * constructor to create a new LinkedList
   */
  constructor() {}

  /**
   * Inset new number into LinkedList
   * @param {*} _value 
   */
  insert(_value:number) {
    const newNode = new Node(_value);
    if (!this.head) {
      this.head  = newNode;
    }
    else{
      let cur:Node= this.head;
      while(cur.next)
        cur = cur.next;
      cur.next = newNode;
    }
    

  }

  get(index:number){
    if(index >= this.length())
    throw Error('index beyond end of list');
    if(index < 0)
    throw Error('index must be zero or positive');
    let counter = 0, cur:Node = this.head;
    while( counter < index){
      cur = cur.next;
      counter++;
    }
    return cur.value;
  }
  length() {
    let counter = 0, cur = this.head;
    while(cur && counter < 10){
      cur = cur.next;
      counter++;
    }
    return counter;
    
  }
  toString() {
    let str = '';
    let cur = this.head;

    while (cur) {
      //str = str.concat( `${cur.value}\n`);
      str += `${cur.value}\n`;
      cur = cur.next;
    }
    return str;
  }

}