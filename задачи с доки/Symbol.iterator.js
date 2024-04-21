const {0: test, 1: qa} = ["test", "qa"]
console.log(test, qa)

const person = {
    name: "Daniel",
    age: 25,
    country: "UA"
}

person[Symbol.iterator] = function () {
    const prop = Object.keys(this)
    let count = 0
    return {
        next() {
            if (count < prop.length) {
                const key = prop[count]
                let result = {done: false, value: person[key]}
                count++
                return result
            } else {
                return {done: true}
            }
        },
    }
}

const [name, age, country] = person
console.log(name, age, country)