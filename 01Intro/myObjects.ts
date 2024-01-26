// const User = {
//     name: "hitest",
//     email: "hitest@lco.dev",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// let newUser = {name: "hitest", isPaid: false, email: "h@h.com"}
// createUser(newUser)
// //createUser({name: "hitest", isPaid: false, email: "h@h.com"})

// function createCourse():{name: string, price: number}{
//     return {name: "reactjs", price: 399}
// }

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// function createUser(user: User): User {
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number
}

let myUser: User = {
    _id: "1245",
    name: "h",
    email: "h@h.com",
    isActive: false,
    
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

myUser.email= "h@gmail.com"
//myUser._id = 234234

