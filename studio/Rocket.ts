import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
    // properties and methods
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[]=[]; 
    astronauts: Astronaut[]=[];
    
    constructor(name: string, totalCapacityKg : number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    } 
    sumMass(items: Payload[]): number {
        let totMass: number = 0;
        for(let i=0; i < items.length; i++) {
            totMass += items[i].massKg;
        }
        return totMass;
     }   
     currentMassKg(): number {
        let totCargoMass = this.sumMass(this.cargoItems);
        let totAstronautMass = this.sumMass(this.astronauts);
        let totCurrMass= totCargoMass + totAstronautMass;
        return totCurrMass; 
     }
     canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
     }
     addCargo(cargo: Cargo): boolean {
        if(this.canAdd()){
            return true;
        }else{
            return false;
        }
     }
     //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems  
} 