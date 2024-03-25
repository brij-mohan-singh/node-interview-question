# Object.freeze() vs const with live example

**Object.freeze()** and **const** are both used in JavaScript to create **immutable values**, but they serve different purposes.

## const: 
**const** is used to declare a constant variable whose value cannot be **reassigned**. However, it does not make the value itself immutable. If the value is an **object** or **an array**, its properties or elements can still be changed.

## Object.freeze():
**Object.freeze()** is a method that freezes an object, making it immutable. Once an object is frozen, its properties cannot be added, modified, or removed. This affects all nested objects as well, making the entire object graph immutable.

Here's an example to demonstrate the difference between **const** and **Object.freeze()**:

      // Using const
      const person = {
        name: "John",
        age: 30
      };
      
      // This is valid
      person.age = 31;
      
      console.log(person); // Output: { name: "John", age: 31 }
      
      // Using Object.freeze()
      const frozenPerson = Object.freeze({
        name: "Jane",
        age: 25
      });
      
      // This will throw an error in strict mode or fail silently in non-strict mode
      frozenPerson.age = 26;
      
      console.log(frozenPerson); // Output: { name: "Jane", age: 25 }
