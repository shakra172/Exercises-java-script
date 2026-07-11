const number = [1,2,3,4,5];

const multi = number.reduce((total,current)=> total * current);

console.log(multi);

const numbers = [1,2,3,4,5];

const sum = number.reduce((total,current)=> total+current,0);
console.log(sum);