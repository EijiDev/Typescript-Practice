
function addTwo(num: number): number {
    return num + 2;
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let logInUser = (name:string, email:string, isPaid:boolean = false) => {}


let myValue = addTwo(5);
getUpper("EjPogi");
signUpUser("Ej", "ejpogi@gmail.com", true);
logInUser("h", "h@gmail.com")

const getHello = (s: string):string => {
    return ""
}

const heros = [1, 2, 3];
heros.map((hero): string => {
    return "hero is" + hero;
});


function consoleError(errmsg: string): void {
    console.log(errmsg);
}

function handleError (errmsg: string): never {
    throw new Error(errmsg);
}
export {}    