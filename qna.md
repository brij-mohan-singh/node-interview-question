##Question -  How JavaScript Works: Web APIs, Callback Queue, and Event Loop

![webapi](https://github.com/smb-it-coder/node-interview-question/assets/112647012/f74f0363-d220-4f16-b593-baf3aaf7ee52)


  console.log("start");

// 1 sec delay
setTimeout(function() { 
  console.log("delay")
}, 1000);

console.log("end");
