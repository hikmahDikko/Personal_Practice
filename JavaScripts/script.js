//Array fundamentals
const years = new Array(1990, 1967, 2002, 2010, 2018);

console.log(years);
console.log(years[years.length-1]);

const calc = (birthYear) => {
    return 2037 - birthYear
};

const age = [];

 const obj ={
    name : "Hikmah",
    year : 28 ,
    calc : (birthYear) => {
        return 2037 - birthYear
    }
 }

const value = years.forEach(element => {
    return age.push(calc(element)); 
});

console.log(age);
console.log(obj['calc'](2012));