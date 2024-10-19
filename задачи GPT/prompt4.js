const products = [
    { id: 1, name: 'Apple', category: 'Fruit', price: 1.2, quantity: 10 },
    { id: 2, name: 'Banana', category: 'Fruit', price: 0.5, quantity: 5 },
    { id: 3, name: 'Carrot', category: 'Vegetable', price: 0.8, quantity: 0 },
    { id: 4, name: 'Broccoli', category: 'Vegetable', price: 1.5, quantity: 3 },
    { id: 5, name: 'Chicken', category: 'Meat', price: 5.0, quantity: 2 },
]

function productsTotalValue(arr) {
    const filteredArr = arr.filter((product) => product.quantity > 0)

    const totalValueArr = filteredArr.reduce((acc, product) => {
        if (!acc[product.name]) {
            acc[product.name] = {
                name: product.name,
                totalValue: 0,
            }
        }

        acc[product.name].totalValue += product.price * product.quantity

        return acc
    }, {})

    return Object.values(totalValueArr)
        .filter((item) => item.totalValue > 0)
        .sort((a, b) => b.totalValue - a.totalValue)
}

console.log(productsTotalValue(products))
