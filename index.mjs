const calc = () => ({
  result: 0,
  add: function (num) {
    this.result += num;
    return this;
  },
  substract: function (num) {
    this.result -= num;
    return this;
  },
  multiply: function (num) {
    this.result *= num;
    return this;
  },
});

const result = calc.add(10).multiply(5).substract(30).add(10);
console.log(result, "result");
