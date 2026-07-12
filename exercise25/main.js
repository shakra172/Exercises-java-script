//spread operators
const numbers = [1,2,3];

const allNumbers = [...numbers, 4,5,6];

console.log(allNumbers);

console.log('.....!!!!');


//rest operators
function multi(...numbers){
    return numbers.reduce((total,current)=> total*current,1);
}
console.log(multi(5,5,2,2));