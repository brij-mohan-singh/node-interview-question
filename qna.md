##Question -  How JavaScript Works: Web APIs, Callback Queue, and Event Loop

![Uploading webapi.gif…]()

  console.log("start");

// 1 sec delay
setTimeout(function() { 
  console.log("delay")
}, 1000);

console.log("end");
