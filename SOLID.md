https://github.com/fgitpush/Top-Laravel-Interview-Questions-Wiki


# Liskov Substitution Principle

**The Liskov Substitution Principle** ensures that objects of a superclass can be replaced with objects of its subclasses without affecting the application's correctness.

It's like saying, if you have a program that uses a bird, you should be able to swap in a different kind of bird, like a sparrow or a pigeon, and everything should still work just fine. It ensures that a subclass can stand in for its parent class without any errors or unexpected behavior.

// In this setup, Bird is the superclass. Sparrow and Penguin are subclasses.
// According to LSP, you should be able to replace instances of Bird with instances of its subclasses (Sparrow or Penguin) without altering the correctness of the program.

        class Bird {
            public function fly() {
                echo "I can fly!";
            }
        }

        class Sparrow extends Bird {
            // Sparrow flies, so no need to override fly()
        }
        
        class Penguin extends Bird {
            public function fly() {
                throw new Exception("I can't fly!");
            }
        }
        
        function makeBirdFly(Bird $bird) {
            $bird->fly();
        }

        $bird1 = new Sparrow();
        $bird2 = new Penguin();
        
        makeBirdFly($bird1); // Works fine
        makeBirdFly($bird2); // Error: breaks LSP


#Dependency Inversion Principle :- 

  DIP is focusing on decoupling high-level modules from low-level modules by introducing an abstraction layer.

         1.  High-level modules should not depend on low-level modules. Both should depend on abstractions.
         2.  Abstractions should not depend on details. Details should depend on abstractions

         
                                // Imagine you have a TV remote (the UserDataProcessor) that needs batteries (the DatabaseInterface) to work.
                                // It doesn't matter what brand of batteries you use (like MySQLDatabase or any other database), as long as they fit the remote.

                                  interface DatabaseInterface {
                                      function fetchData();
                                  }
                                  
                                  class MySQLDatabase implements DatabaseInterface {
                                      function fetchData() { /* ... */ }
                                  }
                                  
                                  class UserDataProcessor {
                                      private $database;
                                  
                                      function __construct(DatabaseInterface $db) {
                                          $this->database = $db;
                                      }
                                  
                                      function processData() {
                                          $data = $this->database->fetchData();
                                          // process data
                                      }
                                  }


Explain Dependency Injection
Dependency Injection (DI) in PHP is like giving a class its 'tools' from outside rather than building them inside. It makes your code flexible (easy to change), clear (easy to understand), and test-friendly (easy to check if it's working).

// without DI
class Car {
    private $engine;
    
    public function __construct() {
        $this->engine = new Engine(); // The Car class is directly dependent on the Engine class.
    }
}

// with DI

class Car {
    private $engine;
    
    public function __construct(Engine $engine) {
        $this->engine = $engine; // The Engine dependency is injected into the Car class.
    }
}

// Creating an Engine instance and injecting it into the Car class.
$engine = new Engine();
$car = new Car($engine);
