{{{var v = 40;}}}
v

//var Vs let
//for (let i = 0; i < 10; i++) {
for (var i = 0; i < 10; i++) {
  //Block scope
}
i

//function sum(a, b) {
  //Function scope
//  var result = a + b;
//}

//sum (4, 3);

const answer = 2;
const greeting = "Hello";

const numbers = [1, 4, 5, 6];
const person = {
  fname: 'Sulabh',
  lname: 'Vikas',
};

//console.log(this);

const testObj = {
  func1: function () {
    console.log('func1', this);
  },
    
  func2: () => {
    console.log('func2', this);
  },
};

testObj.func1();
testObj.func2();

const square1 = (a) => {
    return a * a;
};
console.log(square1(3));

const square2 = (a) => a * a;
console.log(square2(4));

const square3 = a => a * a;
console.log(square3(5));

const render = () => {

  ReactDOM.render(
    React.createElement(
      "div",
      null,
      "Hello square function with Map",
      React.createElement('div',null, [1,2,3,4].map(a => a * a)),
    ),
    document.getElementById('mountNode2'),
  ); 
}