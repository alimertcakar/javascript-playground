// https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/

// function myFunction() {
//   const obj = {
//     whatsMyThis: function () {
//       console.log(this, "whatsMyThis:this");
//     },
//     whatsMyArrowThis: () => {
//       console.log(this, "whatsMyThis ARROW");
//     },
//   };

//   obj.whatsMyThis();

//   return obj;
// }

// myFunction().whatsMyArrowThis();

// Object method old/new
// Call bind apply
// direct reference to obf method

function logA() {
  console.log(this.a);
}
// implicint binding
const obj1 = {
  a: 1,
  logA: logA,
};

const obj2 = {
  a: 2,
  logA: obj1.logA,
};

const obj3 = {
  a: 3,
  obj1: obj1,
};

obj3.obj1.logA();
obj1.logA();
obj2.logA();
