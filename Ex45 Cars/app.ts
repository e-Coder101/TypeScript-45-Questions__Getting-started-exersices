type Car = {
    manufacturer: string,
    modelName: string,
    color?: string,
    isManual?: boolean,
    drivenMileage?: number,
    modifications?: string
};

const make_Car = (mfr: string, name: string, cl?:string, isM?: boolean, mlg?: number, mods?: string ): Car => 
({manufacturer: mfr, modelName: name, color: cl, isManual: isM, drivenMileage: mlg, modifications: mods});

//asigns the value to an object then prints it.
let Agera_S = make_Car("Koenigsegg", "Agera S", "Ivory", true,);
console.log(JSON.stringify(Agera_S, null, 1));

//prints directly, doesn't assign it to an object
//console.log(JSON.stringify(make_Car("Koenigsegg", "Agera S", "Ivory", true,), null, 1));