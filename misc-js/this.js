// https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/

function Shape(id) {
  // Function Declaration
  this.id = id;
}

function myFunction() {
  const obj = {
    whatsMyThis: function () {
      console.log(this, "whatsMyThis:this");
    },
    whatsMyArrowThis: () => {
      console.log(this, "whatsMyThis ARROW");
    },
  };

  obj.whatsMyThis();

  return obj;
}

myFunction().whatsMyArrowThis();
