//js is single threaded
//heap does all memory management
//instructions first are pushed in call stack then they execute one by one by threads
console.log("one")//displayed first,executed first
setTimeout(()=>{
  console.log("timer 1")//displayed third,executed second ..but waits in web apis till timer is complete
},5000)
setTimeout(()=>{
  console.log("timer 2")
},0)
//when there are two apis op is one two timer1 timer2 ..in web apis both timeout are running, after web api work is done but call stack is having some op..timeout will be placed in callback queue to wait for callstack to be empty 
//the timer which has less ime is executed first
console.log("two")//displayed second,executed third
//set timer,windows,fetch etc not part of js it is part of web apis ..ie provided by browser..
//js cannot handle asynhronous task..timeout is asynchronous task..we need to wait for it..ie. it is executed in web api
console.log("two")
console.log("two")
console.log("two")
console.log("two")
//there is event loop which pushes all to callstack,webapi,callbackqueue