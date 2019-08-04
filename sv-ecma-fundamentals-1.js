//const PI = Math.PI;
//const E = Math.E;
//const SQRT2 = Math.SQRT2;

const {PI, E, SQRT2} = Math;

const myCircle = {
  name: 'CircleSV',
  radius: 2,
};

const myCircleArea = ({radius}, {precision = 2} = {}) =>
(PI * radius * radius).toFixed(precision);

console.log(myCircleArea(myCircle, {precision: 5}));

const templateString = `
  <div>
    ${Math.random()}
  </div>
`;
console.log(templateString);