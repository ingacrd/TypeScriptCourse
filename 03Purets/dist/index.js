"use strict";
// class User {
//     public email: string
//     private name: string
//     //#name: string
//     readonly city: string = ""
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        //#name: string
        this.city = "";
    }
    deleteTocken() {
        console.log("Tocken deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(coursNumber) {
        if (coursNumber <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = coursNumber;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const hitesh = new User("h@h.com", "hitesh");
//hitesh.city = "Bogota"
//hitesh.name
