type HelloWorld = string
interface User {
    id: number
    name: string
    age: number
}

type UserKeys = keyof User
