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
//bracket notation
console.log(obj['calc'](2012));

const arr1 = [2, 4, 6, 8, 3, -3, 'error', 0, -9, 5];
const arr2 = [2, 1, 6, 8, 3, -5, 80];

const calcAmplitude = (temp1, temp2) => {
    const temp = temp1.concat(temp2);
    
    let max = temp[0];
    let min = temp[0];

    for (let i = 0; i < temp.length; i++) {
        let current = temp[i];
        if(typeof(current) !== 'number') continue
        if(current > max) max = current;
        if(current < min) min = current;
    }
    console.log(max - min);
}

calcAmplitude(arr1, arr2);

const arr = [17, 21, 23];

const printForecast = (data) => {
    data.forEach((element, i) => {
        let arr = [];
        str = "";
        arr.push(`"... ${element} degree celcius in ${i+1} days"`);
        str += arr
        console.log(str);
    });
}
printForecast(arr);