function addTwo(num: number): number {
    return num + 2
}

const getHello = (s: string):string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"]

heros.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
}

function handleError(errmsg:string): never{
    throw new Error(errmsg)
}