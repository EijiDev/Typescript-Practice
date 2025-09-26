
let score: number | string = 34

score = 44

score = "55"


type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let ej: User | Admin = {name: "ej", id: 334}
ej = {username: "ejay", id: 334}

//function getDBId(id: number | string) {
    //making some API calls
//    console.log(`DB id is ${id}`);
//} 

getDBId(3)
getDBId("3")

function getDBId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase()
    } 
}