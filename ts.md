TypeScript extends JavaScript by adding several powerful features that enhance type safety, code maintainability, and developer experience. Here's a breakdown of some key TypeScript features:

1. Static Typing:

TypeScript enforces type annotations on variables, functions, and object properties.
This improves code clarity, helps catch errors early during development (at compile time), and prevents runtime type errors.
TypeScript
let age: number = 30; // Enforces age to be a number
let name: string = "Alice";

function greet(name: string): string {
  return "Hello, " + name;
}
Use code with caution.
2. Interfaces:

Define contracts for objects, specifying the properties they must have and their types.
Interfaces promote code reusability and ensure proper object structure.
TypeScript
interface User {
  name: string;
  age: number;
}

const user1: User = { name: "Bob", age: 25 };
Use code with caution.
3. Classes:

TypeScript supports object-oriented programming with classes.
Classes have constructors, methods, and properties with access modifiers (public, private, protected).
TypeScript
class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getInfo(): string {
    return `Product: ${this.name}, Price: $${this.price}`;
  }
}
Use code with caution.
4. Generics:

Allow you to write functions and classes that work with different data types without code duplication.
Generics use placeholders (T) that can be replaced with specific types at compile time.
TypeScript
function identity<T>(value: T): T {
  return value;
}

const numberIdentity = identity<number>(10);
const stringIdentity = identity<string>("Hello");
Use code with caution.
5. Enums:

Define sets of named constants to represent a fixed collection of values.
Enums improve code readability and maintainability by using meaningful names instead of raw numbers.
TypeScript
enum Color {
  Red,
  Green,
  Blue,
}

let myColor: Color = Color.Green;
Use code with caution.
6. Decorators:

A meta-programming feature that allows you to add annotations to classes, properties, methods, and functions.
Decorators provide a way to extend the functionality of code without modifying the code itself.
7. Type Assertions:

In rare cases, if TypeScript can't infer the type or you're working with existing JavaScript code, you can use type assertions to explicitly tell the compiler the type of a variable.
TypeScript
const element = document.getElementById("myElement") as HTMLInputElement;
element.value = "New Value";
Use code with caution.
8. Intersection Types:

Combine multiple types to create a new type that has the properties of all the combined types.
TypeScript
interface UserCreds {
  username: string;
}

interface User {
  name: string;
  age: number;
}

type AuthenticatedUser = User & UserCreds; // Combines User and UserCreds

const loggedInUser: AuthenticatedUser = {
  username: "john.doe",
  name: "John Doe",
  age: 35,
};
Use code with caution.
Beyond these core features, TypeScript offers many more enhancements, including:

Namespaces for organizing code
Modules for modularity and code reuse
Destructuring for concise object and array manipulation
Advanced type manipulation (unions, tuples, utility types)
By leveraging TypeScript's features, you can develop more robust, maintainable, and scalable JavaScript applications.
