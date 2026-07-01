let car = {
    name : "Toyoto",
    model : "Camry",
    make : "japan",
    year : 1999,
    start : function(){
        console.log("the car is starting");
    }
}

console.log(car);
car.start();

const number = {
    number : 10,
    number : 5,
    add : function (a, b){
        return a + b;
    }

}
console.log(number);
console.log(number.add(10, 5));