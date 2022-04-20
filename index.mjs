"use strict";

const not =
  (fn) =>
  (...args) =>
    !fn(...args);

const output = (x) => console.log(x);

const when = (fn) => (predicate) => (args) =>
  predicate(args) ? fn(args) : undefined;

function isShortEnough(str) {
  return str.length <= 5;
}

function isLongEnough(str) {
  return not(isShortEnough);
}

var msg1 = "Hello";
var msg2 = msg1 + " World";

const printIf = when(console.log);

printIf(isShortEnough)(msg1); // Hello
printIf(isShortEnough)(msg2);
printIf(isLongEnough)(msg1);
printIf(isLongEnough)(msg2); // Hello World
