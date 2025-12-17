//4) Create another file named app.js.
//5) In app.js, import the array of person objects from the data.js module.
import { humano } from "./data.js";
// console.log(humano) 

const calculateAge = (myHumano) => {
    let sumaTotal = 0;
    for (let i = 0; i < myHumano.length; i++){
        sumaTotal += myHumano[i].age;
    }
    return sumaTotal / myHumano.length;
}
console.log('Avergage age =  ', calculateAge(humano)) //32 