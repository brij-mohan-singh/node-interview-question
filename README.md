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
          
          
          
          
## Own filter function 
       
                  Array.prototype.myReduce = function(callback, accumulator) {
                      if(this.length < 1) {
                          throw new Error("Array is Empty")
                      }

                      if(!accumulator) {
                          if(typeof this[0] === "string") {
                              accumulator = '';
                          } else if(typeof this[0] === "number") {
                              accumulator = 0;
                          }
                      }

                      for(let index=0; index < this.length; index++) {
                          accumulator = callback(accumulator, this[index]);
                      }
                      return accumulator;
                  }

                  const names = ['Zakir', 'Rashid', 'Harish'];
                  const filterNames = names.myFilter(name => name !== 'Zakir');
                  const statment = names.myReduce((acc, ele) => acc + ele);

##  input string aabccderggkiubaaeccBB   
##  Output expected string  :  a2b1c2d1e1r1g2k1i1u1b1a2e1c2 
##  means a have sequence occurence twice other one a letter also have string again but position is different



              let strV = 'aabccderggkiubaaeccBB';
              
              var arr = [];
              let counter = 0;
              let letter = strV[0];
             
              for(let c in strV) {
                    if(letter != strV[c]) {  
                      let newArr = [letter, counter];
                      arr.push(newArr);
                      letter = strV[c] ;
                      counter = 0;
                  }

                  counter +=1;

              }

              console.log('arr', arr);
              const statment = arr.reduce((acc, ele) => acc + ele);
              console.log('statment', statment.replace(/,/g, ""));
                           
                           
                           OR
                           
                           
                           
              let strV = 'aabccderggkiubaaeccBB';
              let strVArray = strV.split('');
              console.log('strVArray ==> ', strVArray);
              var arr = [];
              let counter = 0;
              let letter = strV[0];
              for(let i=0; i < strVArray.length; i++) {
                  if(letter != strVArray[i]) { 
                      let newArr = [letter, counter];
                      arr.push(newArr);
                       letter = strVArray[i];
                      counter = 0;
                  }

                  counter +=1;

              }

              //console.log('arr', arr);
              const statment = arr.reduce((acc, ele) => acc + ele);
              
              
       ## 3 element max sum 
       
             
            let arrT = [1, 2, 5, -1, 77, 21 , 2];
            let tripleSumMax = arrT[0]+arrT[1]+[2];
            let arrLen = arrT.length;
            let tripleSumMaxP = 0;

            for(let i = 0 ; i < arrLen ; i++ ) {
              for(let j = i+1 ; j < arrLen ; j++) {
                  for(let k = j+1 ; k < arrLen ; k++) {
                    tripleSumMaxP = arrT[i] + arrT[j]  + arrT[k] ;
                    if(tripleSumMax < tripleSumMaxP){
                      tripleSumMax = tripleSumMaxP
                    }

              }

              }

            }

            console.log('tripleSumMax',tripleSumMax );
            
            
            
            
            
   ##.  pair sum 
   
              let arr =  [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
              let len = arr.length;
              let y = 110; // onw pair sum equal to 110
              let pair = [];

              for(let i = 0; i < len; i++) {

                 for(let j=i+1 ; j < len ; j++) {

                    if( (arr[i] +  arr[j])  == y) {
                      pair.push([arr[i], arr[j]]);
                    }
                 }
              }

          console.log('all the PAIRS possible', pair);
          
          
          
          
 ## unsolved problems
 

              let cArr =  [-2, -3, 4, -1, -2, 1, 5, -3];


              let clen = cArr.length;
              let maxSumC = 0;
              let arrEC = [];
              let element = []
              for(let i=0;i < clen; i++) {

                  element.push[cArr[i]];
                  for( let j = i+1 ; j < clen ; j++) {
                    element.push[cArr[j]];
                    maxSumC +=  cArr[i] + cArr[j] ;
                  }

                console.log('Sum of element : ' +  maxSumC , element);
                maxSumC = 0;

              }

              console.log('element', arrEC);

            
  ### Given the time in numerals we may convert it into words, as shown below:

At , use o' clock. For , use past, and for  use to. Note the space between the apostrophe and clock in o' clock. Write a program which prints the time in words for the input given in the format described.

Function Description

Complete the timeInWords function in the editor below.

timeInWords has the following parameter(s):

int h: the hour of the day
int m: the minutes after the hour
Returns

string: a time string as described
Input Format

The first line contains , the hours portion The second line contains , the minutes portion

##Constraints

Sample Input 0

5
47
Sample Output 0

thirteen minutes to six
##Sample Input 1

3
00
##Sample Output 1

three o' clock
##Sample Input 2

7
15
##Sample Output 2

quarter past seven     
            
            

  
  ## Solution :-  

                                      function timeInWords(h, m) {
                                                  let nums = [ "zero", "one", "two", "three", "four",
                                                                          "five", "six", "seven", "eight", "nine",
                                                                          "ten", "eleven", "twelve", "thirteen",
                                                                          "fourteen", "fifteen", "sixteen", "seventeen",
                                                                          "eighteen", "nineteen", "twenty", "twenty one",
                                                                          "twenty two", "twenty three", "twenty four",
                                                                          "twenty five", "twenty six", "twenty seven",
                                                                          "twenty eight", "twenty nine",
                                                                      ];

                                                     let output = '';

                                                      if (m == 0) {
                                                          output =  nums[h] + " o' clock ";
                                                      } else if (m == 1) {
                                                          output =   "one minute past " + nums[h];
                                                      }  else if (m == 59) {
                                                          output =   "one minute to " + nums[(h % 12) + 1] ;
                                                      } else if (m == 15) {
                                                          output =   "quarter past " + nums[h] ;
                                                      } else if (m == 30) {
                                                          output =   "half past " + nums[h];
                                                      } else if (m == 45) {
                                                          output =   "quarter to " + nums[(h % 12) + 1];
                                                      }  else if (m <= 30){
                                                          output =    nums[m] + " minutes past " + nums[h] ;
                                                      } else if (m > 30) {
                                                          output =    nums[60 - m] + " minutes to " + nums[(h % 12) + 1] ;
                                                      }

                                                   return output;

                                         }

                                       let h = 6;
                                        let m = 24;
                                        timeInWords(h, m);

