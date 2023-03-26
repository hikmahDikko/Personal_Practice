//@ts-ignore
import { faker } from '@faker-js/faker';
import { Mappable } from './customMap';

export class User implements Mappable{
    name : string;
    location : {
        lat : number,
        long : number
    };
    mapperContent () : string {
        return `User Name: ${this.name}`;
    };
    color : "red";

    constructor(){
        this.name = faker.name.firstName();
        this.location = {
            lat : parseFloat(faker.address.latitude()),
            long: parseFloat(faker.address.longitude()) 
        } 
    }
}