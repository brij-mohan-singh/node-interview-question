# node-interview-question

#Sticky Session
#singlton example in js - 

var Singleton = (function () {
          var instance;
          function createInstance() {
              var object = new Object("I am the instance");
              return object;
          }

          return {
              getInstance: function () {
                  if (!instance) {
                      instance = createInstance();
                  }
                  return instance;
              }
          };
      })();

function run() {
    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();

    console.log("Same instance? " + (instance1 === instance2));
}

## Hoisting
## closure function 
                   - : Closure means that an inner function always has access to the vars and parameters of its outer 
    function, even after the outer function has returned. 
    
               // nested function example

               // outer function

               function greet(name) {
                   // inner function
                   function displayName() {
                       console.log('Hi' + ' ' + name);
                   }

                   // calling inner function
                   displayName();
               }
               
              // calling outer function
              greet('John'); // Hi John


## callback 
          :- A callback function is a function passed into another function as an argument, which is then invoked 
                    inside the outer function to complete some kind of routine or action.

                    Here is a quick example:

                    function greeting(name) {
                      alert(`Hello, ${name}`);
                    }

                    function processUserInput(callback) {
                      const name = prompt("Please enter your name.");
                      callback(name);
                    }

                    processUserInput(greeting);


## callback hell
## promise.chain
