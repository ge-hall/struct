import LinkedList from '../src/Lists/LinkedList';
import { isIterable } from 'core-js';

describe('Linked List properties', () => {
  test('Empty List', () => {
    const list = new LinkedList();
    expect(list != null).toBe(true);
    expect(list.length()).toBe(0);
  });
  test('List insertion', () => {
    const list = new LinkedList();
    expect(list.length()).toBe(0);
    list.insert(5);
    expect(list.length()).toBe(1);
  });

  
  test('List get with index >= length', () => {
    const list = new LinkedList(); 
    try {
      list.get(1);
    } 
    catch (e) {
      expect(e.message).toBe('index beyond end of list');
    }
  });

 test('List get with negative index', () => {
  const list = new LinkedList(); 
       try{
       
        
        list.get(-1);
    }
      catch (e) {
      expect(e.message).toBe('index must be zero or positive');
    }
 });

 test('List get valid index', () => {
  const list = new LinkedList();
  list.insert(5);
    
    expect(list.get(0)).toBe(5);
  });

})