const user = {
    name: "Daniel",
    age: 21,
    skills: {
        qa: {
            postman: {
                variables: true,
                runs: true,
                api: {
                    soap: true,
                    rest: true

                }
            }
        }
    },
    kids: null,
    companies: ["Abz agency", "Leningrad agency", "K-ampus", {
        test: "test"
    }, null],
}

function ownCloneDeep(obj) {
    const newObj = {}

    if (obj === null) {
        return null
    }

    if (Array.isArray(obj)) {
        return obj.map(item => typeof el === "object" ? ownCloneDeep(item) : item)
    }

    for (let key in obj) {
        typeof obj[key] === "object" ? newObj[key] = ownCloneDeep(obj[key]) : newObj[key] = obj[key]
    }

    return newObj
}

console.log(ownCloneDeep(user))