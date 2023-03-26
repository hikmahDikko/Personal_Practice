//@ts-ignore
import { faker } from "@faker-js/faker";
import { Mappable } from "./customMap";

export class Company implements Mappable{
    companyName : string;
    catchPhrase: string;
    location : {
        lat : number;
        long : number
    };
    color : "blue"

    constructor() {
        this.companyName = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat : parseFloat(faker.address.latitude()),
            long : parseFloat(faker.address.longitude()),
        }
    }

    mapperContent () : string {
        return `
        <div>
            <h1>Company Name: ${this.companyName}</h1>
            <h3>CatchPhrase : ${this.catchPhrase}</h3>
        </div>
        `;
    }
}