interface Client {
    readonly dbId: number
    email: string
    userId: number
    googleId?: string

    //stratTrail: () => string

    stratTrail(): string
    getCoupon(couponname: string, value: number): number
}

interface Client {
    githubTocken: string
}

interface Admini extends Client {
    role: "admin" | "ta" | "learner"
}

const hitesh: Admini = {dbId:22, email:"h@g.com",userId: 221,
role: "admin",
githubTocken: "github",
stratTrail: () => {
    return "trail started"
},
getCoupon:(name: "hitesh10", off: 2) => {
    return 10
}}