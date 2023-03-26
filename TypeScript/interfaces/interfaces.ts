interface Vehicle {
    model: string, 
    year : number, 
    broken
     : boolean
}; 

const oldCivic = {
    model : "civic",
    year : 2000,
    broken : true
};

const printVehicle = (vehicle :  Vehicle ) : void => {
    console.log(`Model : ${vehicle.model}`)
    console.log(`Year : ${vehicle.year}`)
    console.log(`Broken :${vehicle.broken}`)
};

printVehicle(oldCivic);

class Vehicles{
    num : number;

    constructor(public vehicle: string, num: number){
        this.num = num;
    }

    public car () : void {
        console.log("Carrrrrrr");
    }
}

class Car extends Vehicles{
    constructor(public vehicle: string, num: number){
        super(vehicle, num);
    }
}

const vehicle = new Vehicles("Toyota", 34);
console.log(vehicle);
vehicle.car();

const car = new Car("", 4);
console.log(car);