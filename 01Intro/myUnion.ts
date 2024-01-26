let score: number | string = 33

score = "success"

type User3 = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let hitesth: User3 | Admin = {name: "histesth", id: 334}

hitesth = {username: "hc", id: 334}


// function getDbId(id: number | string) {
//     //making some API calls
//     console.log(`DB id is: ${id}`)
// }
getDbId(3)
getDbId("3")

function getDbId(id: number | string) {
    //making some API calls
    if(typeof id === "string"){
        id.toLowerCase()
    }

    //array
    const data: number[] | string[] = ["1","2","2"] //all will be or numbers or string
    const data1: (string|number|boolean)[] = ["1", 3, true] 
     
    let seatAllotment : "aisle" | "middle" | "windown"
    seatAllotment = "aisle"
    //seatAllotment = 44
}