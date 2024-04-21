function Basket() {
    this.productList = [];
}

Basket.prototype.add = function (product) {
    if (this.productList.find(el => el.id === product.id)) return
    this.productList.push(product)
}

Basket.prototype.addCount = function (productId, count) {
    this.productList = this.productList.map(item => {
        if (item.id === productId) {
            item.count += count
            return item
        }
        return item
    })
}

Basket.prototype.removeCount = function (productId, count) {
    this.productList = this.productList.map(item => {
        if (item.id === productId) {
            item.count -= count
            return item
        }
        return item
    }).filter(item => item.count > 0)
}

const basket = new Basket();

basket.add({
    id: 1,
    name: "Headphones",
    count: 5
})

basket.add({
    id: 2,
    name: "Phone",
    count: 1
})

basket.addCount(1, 10)
basket.removeCount(1, 16)
basket.addCount(2, 1)
basket.removeCount(2, 1)

console.log(basket)
