Array.prototype.myPush = function () {
    for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i]
    }

    return this.length
}

Array.prototype.myPop = function () {
    if (this.length === 0) {
        return undefined
    }

    const lastElement = this[this.length - 1]

    this.length = this.length - 1

    return lastElement
}

Array.prototype.myShift = function () {
    if (this.length === 0) {
        return undefined
    }

    const firstElement = this[0]

    this.splice(0, 1)

    return firstElement
}

Array.prototype.myUnshift = function () {
    const newArray = Array.from(arguments)

    const splitArray = [...newArray, ...this]

    for (let i = 0; i < splitArray.length; i++) {
        this[i] = splitArray[i]
    }

    return splitArray.length

}

Array.prototype.myMap = function () {
    
}

const arr = [1, 2, 3]
arr.myPush("test")
arr.myPush("deleted")
console.log(arr.myPop())
console.log(arr.myShift())
arr.myUnshift("qa")

console.log(arr)