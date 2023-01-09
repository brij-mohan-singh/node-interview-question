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
                   - : Closure means that an inner function always has access to the vars and parameters of its outer function, even after the outer function has returned. 
## callback 
## callback hell
## promise.chain
