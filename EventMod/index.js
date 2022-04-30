// Events Module
// Node.js has a built-in module, called "Events",
// where you can create-, fire-, and listen for- your own events.

// Example 1— Registering for the event to be fired only one time using once.

// Example 2 — Create an event emitter instance and register a couple of callbacks

// Example 3— Registering for the event with callback parameters

const EventEmitter = require("events");

// console.log(EventEmitter); //it prints all the functionality that provide my events module.
const event = new EventEmitter();
// console.log(event);
// event.on("sayMyName", () => {
//   console.log("prajwal is my name");
// });
// event.on("sayMyName", () => {
//   console.log("prajwal is my name");
// });
// event.on("sayMyName", () => {
//   console.log("prajwal is my name");
// });
// event.emit("sayMyName");
//event.on means after firing the event this task should perform.
event.on("checkPage", (sc, mg) => {
  console.log(`status code is ${sc} and msg is ${mg}`);
});
event.emit("checkPage", 200, "ok"); //emit emits the event means fires the event
