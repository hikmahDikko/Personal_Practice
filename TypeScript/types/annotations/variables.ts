console.log("HELLO")
//Type annotations
let apple : number = 5;
let spped : string = "fast";
let hasName : boolean = true;
let nothingMuch : null = null;

//built in objects
let now : Date = new Date();

//Array
let color : string[] = ["red", "green", "blue"];

//Class
class Car {

}
let car : Car = new Car();

//Object literal
let point : {x : number; y : number} = {
    x : 10,
    y : 20
}

//Function
const logNumber : (i : number) => void = (i : number) => {
    console.log(i);
};

//When to use annotations
// 1) Function that returnss the "any" type
const json = '{"x" : 10, "y" : 20}';
const coordinate = JSON.parse(json);
console.log(coordinate);

// 2) When we declare a variable on one line and initialize it later
let words = ["red", "green", "blue", "yellow"];
let foundWord : boolean;

for (let i = 0; i < words.length; i++) {
    if(words[i] === 'green'){
        foundWord = true;
    } 
};

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero : boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
