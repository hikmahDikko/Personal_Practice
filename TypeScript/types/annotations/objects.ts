import { Types } from "mongoose";

const profile = {
    name : "hikmah",
    age : 20,
    coords : {
        lat : 0,
        lng : 15
    },
    setAge(age : number) : void {
        this.age = age;
    }
};

const { age } : {age : number} = profile;

//Array with multiple Types
const arr = [new Date(), "", 34, true];
