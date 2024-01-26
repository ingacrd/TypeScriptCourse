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
    protected _courseCount = 1
    //#name: string
    readonly city: string = ""
    constructor(
        public email: string, 
        public name: string,
        // private userId: string
        ) {

    }

    private deleteTocken(){
        console.log("Tocken deleted")
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }
    set courseCount(coursNumber) {
        if(coursNumber <= 1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = coursNumber
    }

}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 4
    }
}

const hitesh = new User("h@h.com", "hitesh")
//hitesh.city = "Bogota"
//hitesh.name