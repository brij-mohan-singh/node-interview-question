# map vs weakmap  with example

Map and WeakMap are both data structures in JavaScript that store key-value pairs. However, they have some differences in terms of functionality and behavior, particularly regarding key retention and garbage collection. Here's an overview of each:

## Map:
Map is a built-in JavaScript data structure that allows you to store key-value pairs where both keys and values can be of any type.
It retains references to its keys, meaning even if the key is no longer used elsewhere in your code, it will still be held in memory by the Map until it is explicitly removed from the Map or the Map object itself is garbage collected.
Iteration order is guaranteed to be the same as the order of insertion.
Example:

    // Creating a Map
    let myMap = new Map();
    
    // Adding key-value pairs to the Map
    let key1 = { name: 'John' };
    let key2 = { name: 'Jane' };
    
    myMap.set(key1, 25);
    myMap.set(key2, 30);
    
    // Retrieving values from the Map
    console.log(myMap.get(key1)); // Output: 25
    console.log(myMap.get(key2)); // Output: 30


## WeakMap:
WeakMap is also a built-in JavaScript data structure for storing key-value pairs, but it differs from Map in that it holds weak references to its keys.
Weak references mean that if there are no other references to a key, it can be garbage collected. This makes WeakMap useful in scenarios where you want to associate data with objects without preventing those objects from being garbage collected.
Keys in a WeakMap must be objects; primitive data types cannot be used as keys.
WeakMap does not have methods like size or clear because these methods would require enumerating keys, which is not possible due to the weak reference nature.
Example:

    // Creating a WeakMap
    let myWeakMap = new WeakMap();
    
    // Creating key objects
    let key1 = {};
    let key2 = {};
    
    // Adding key-value pairs to the WeakMap
    myWeakMap.set(key1, 'value1');
    myWeakMap.set(key2, 'value2');
    
    // Retrieving values from the WeakMap
    console.log(myWeakMap.get(key1)); // Output: value1
    console.log(myWeakMap.get(key2)); // Output: value2

In summary, Map is suitable for situations where you want to maintain strong references to keys and values, while WeakMap is useful when you need to associate data with objects but want those objects to be garbage collected when they are no longer used elsewhere in your code.


