# Deep vs. Shallow Copy in JavaScript: Understanding the Difference with Live Examples
In JavaScript, copying objects involves creating a new object that reflects the original one. However, 
there are two main approaches with distinct implications: shallow copy and deep copy.
## Shallow Copy:
- Creates a new object with references to the same properties of the original object.
- Any changes made to the copied properties will affect both the original and the copy.
## Deep Copy:

- Creates a new object with entirely new copies of the original object's properties, including nested objects or arrays.
- Changes to the copied properties only affect the copy, leaving the original object intact.

  ### Example:
  Let's consider a scenario where we have an object representing a person and their favorite movie:
  
      const person = {
      name: "Alice",
      favoriteMovie: {
        title: "The Princess Bride",
        year: 1987
      }
    };

 ### Shallow Copy Example:

    // Here, we create a new object using the spread operator (...)
    const shallowCopy = { ...person };
    
    shallowCopy.favoriteMovie.title = "Casablanca"; // Modifying the nested property
    
    console.log(person); // Outputs: { name: "Alice", favoriteMovie: { title: "Casablanca", year: 1987 } }
    console.log(shallowCopy); // Outputs: { name: "Alice", favoriteMovie: { title: "Casablanca", year: 1987 } }

### Explanation:

- The spread operator (...) creates a new object (shallowCopy) with references to the
   same properties (name and favoriteMovie) as the original object (person).
- When we modify the title property within shallowCopy's favoriteMovie object, it changes the original object's
   favoriteMovie.title as well because they both reference the same memory location.

### Deep Copy Example:

    // Here, we'll simulate a deep copy using JSON parsing and stringifying
    
    function deepCopy(obj) {
      const stringified = JSON.stringify(obj);
      const parsed = JSON.parse(stringified);
      return parsed;
    }
    
    const deepCopyPerson = deepCopy(person);
    
    deepCopyPerson.favoriteMovie.year = 2023; // Modifying the nested property in the copy
    
    console.log(person); // Outputs: { name: "Alice", favoriteMovie: { title: "Casablanca", year: 1987 } }
    console.log(deepCopyPerson); // Outputs: { name: "Alice", favoriteMovie: { title: "Casablanca", year: 2023 } }

### Explanation:

- This is a simplified deep copy approach using JSON. We stringify the original object (person) into a JSON string, effectively creating an independent representation of the data structure.
- Then, we parse the JSON string back into a new object (deepCopyPerson). This new object has its own copies of the properties and nested objects, including the favoriteMovie object.
- Modifying the year property within deepCopyPerson's favoriteMovie only affects the copy because they are entirely separate objects in memory.

  ### Choosing Between Shallow and Deep Copy:
  - Use shallow copy when you only need a new reference to the top-level properties and don't mind changes affecting both the original and the copy. (Example: Passing function arguments)
  - Use deep copy when you need a truly independent copy of the object, especially when dealing with nested objects or arrays that you don't want to modify the original accidentally. (Example: Storing user data in an application)

Remember, the deep copy using JSON is a simplified approach. In more complex scenarios, libraries like Lodash or deep clone utilities might be preferred for robust deep copy functionality.
Explanation:
