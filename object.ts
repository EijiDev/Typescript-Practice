

//const User = {
//    name: "ejay",
//    email: "ejsolis@gmail.com",
//    isActive: true
//}

//function createUser({name: string, isPaid: boolean}) {}
//let newUser = {name: "ej", isPaid: false, email: "ej@gmail.com"}

//createUser(newUser);

//function createCourse():{name: string, price:number} {
//   return {name: "react", price: 399}
//}

//type User = {
//    name: string;
//    email: string;
//    isActive: boolean
//}

//function createUser(user: User) {
//    return {name: "", email: "", isActive: false}
//}

//createUser({name: "Ej", email: "ej@gmail.com", isActive: false})

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditCardDetails?: number
}

let myUser: User = {
    _id: "1234",
    name: "ej",
    email: "ej.com",
    isActive: false
}

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

myUser.email = "ej@gmail.com"


export {}