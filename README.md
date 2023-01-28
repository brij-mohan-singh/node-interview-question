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
## Shallow vs. Deep Copy
                      :- A deep copying means that value of the new variable is disconnected from the original variable 
                while a shallow copy means that some values are still connected to the original variable.
                
                Shallow copy example
                 Consider the following example:
                 
                             let person = {
                                  firstName: 'John',
                                  lastName: 'Doe',
                                  address: {
                                      street: 'North 1st street',
                                      city: 'San Jose',
                                      state: 'CA',
                                      country: 'USA'
                                  }
                              };


                              let copiedPerson = Object.assign({}, person);

                              copiedPerson.firstName = 'Jane'; // disconnected

                              copiedPerson.address.street = 'Amphitheatre Parkway'; // connected
                              copiedPerson.address.city = 'Mountain View'; // connected

                              console.log(copiedPerson);

##Deep copy example

  The following snippet replaces the Object.assign() method by the JSON methods to carry a deep copy the person object:

                    let person = {
                        firstName: 'John',
                        lastName: 'Doe',
                        address: {
                            street: 'North 1st street',
                            city: 'San Jose',
                            state: 'CA',
                            country: 'USA'
                        }
                    };


                    let copiedPerson = JSON.parse(JSON.stringify(person));

                    copiedPerson.firstName = 'Jane'; // disconnected

                    copiedPerson.address.street = 'Amphitheatre Parkway';
                    copiedPerson.address.city = 'Mountain View';

                    console.log(person);
## find smallest & largest number from array :- 
                                          var arr = [1,5,8,-8,54,65,31,3];
                                          let smallestNum = arr[0];
                                          let largestNum = arr[0];
                                          for(ele of arr) {
                                            if(ele > largestNum){
                                            largestNum = ele;
                                            } else if(smallestNum > ele) {
                                                   smallestNum = ele;
                                            }
                                          
                                          }
                                          
                                          console.log('small number - ', smallestNum);
                                          console.log('largest number - ', largestNum);

## chksum pair :-   Given a list of numbers, return whether any two sums to k.
                For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.


                               function chkPair(A , size , x) {

                                    for (i = 0; i < (size - 1); i++) {
                                        for (j = (i + 1); j < size; j++) {

                                            if (A[i] + A[j] == x) {
                                                document.write("Pair with a given sum " + x + " is (" + A[i] + ", " + A[j] + ")");

                                                return true;
                                            }
                                        }
                                    }

                                    return false;
                                }
 
                              let A = [ 0, -1, 2, -3, 1 ];
                              let x = -2;
                              let size = A.length;

                              if (chkPair(A, size, x)) {
                                  document.write("<br/>Valid pair exists");
                              }
                              else {
                                  document.write("<br/>No valid pair exists for " + x);
                              }
  ##  polymorphism - Compile-time polymorphism  vs	Runtime polymorphism

                  #1 Basic
                  Compile time polymorphism means binding is occuring at compile time
                  Run time polymorphism where at run time we came to know which method is going to invoke
                  #2 Static/Dynamic Binding


                  It can be achieved through static binding
                  It can be achieved through dynamic binding
                  #4.Inheritance
                    Inheritance is not involved
                    Inheritance is involved
                  #5 Example
                  Method overloading is  an example of compile time polymorphism
                  Method overriding is an example of runtime polymorphism
                  Example of Compile-time Polymorphism
                  
  ## creating-a-custom-array-prototype-filter-in-javascript
  
                  const data = [1,2,3,4,5];
                  Array.prototype.myCustomFilter = function(fn) {
                      const filtered = [];

                      for(let i = 0 ; i < this.length ; i++) {
                          if(fn(this[i])) {
                              filtered.push(this[i]);
                          }
                      }

                      return filtered;

                  }

                  const filteredData = data.myCustomFilter(function (el) {
                    if (el > 2) return el;
                  });

                  // using arrow function
                  // const filteredData = data.myCustomFilter(el => el > 2);

                  console.log(filteredData); // output [3,4,5]
                  
                  
  ## creating-my-own-array-prototype-map-method-how-can-i-access-the-array
  
            Array.prototype.brijMap = function(callback){
              let newArray = [];
              for(let i=0; i < this.length;i++){
                  let counter = callback(this[i]);
                  newArray.push(counter);
              }

              return newArray;
          };

          let arr = [1, 2, 3];
          arr = arr.brijMap(e => e * 2);
          console.log(arr);

## current string aabccderggkiubaaeccBB     expected string  :  a2b1c2d1e1r1g2k1i1u1b1a2e1c2 means a have sequence occurence twice other one a letter also have string again but position is different



              let strV = 'aabccderggkiubaaeccBB';
              //let strVArray = strV.split('');
              //console.log('strVArray ==> ', strVArray);
              var arr = [];
              let counter = 0;
              let letter = strV[0];
              //for(let i=0; i < strVArray.length; i++) {
              for(let c in strV) {

                  //if(letter != strVArray[i]) {
                    if(letter != strV[c]) {   

                      let newArr = [letter, counter];
                      arr.push(newArr);
                       //letter = strVArray[i];
                      letter = strV[c] ;
                      counter = 0;

                  }

                  counter +=1;

              }

              console.log('arr', arr);
              const statment = arr.reduce((acc, ele) => acc + ele);
              console.log('statment', statment.replace(/,/g, ""));


