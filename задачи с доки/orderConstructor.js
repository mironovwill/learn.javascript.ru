function Order() {
  this.receipt = {};
  this.isLock = false;
  this.addItem = function (item, count) {
    if (!this.isLock) {
      if (item.name in this.receipt) {
        return (this.receipt[item.name].count += count);
      }

      return (this.receipt[item.name] = { price: item.price, count });
    }

    console.log("Операции с заказом разблокированы!");
  };
  this.removeItem = function (item, count) {
    if (!this.isLock) {
      if (item.name in this.receipt) {
        if (count) {
          if (this.receipt[item.name].count - count < 0) {
            return console.log("Нельзя удалить больше чем есть в количестве");
          }
          if (this.receipt[item.name].count - count === 0) {
            return delete this.receipt[item.name];
          }
          return (this.receipt[item.name].count -= count);
        }
      }
      return console.log("Такого товара нет в списке!");
    }

    console.log("Операции с заказом разблокированы!");
  };
  this.getCheck = function () {
    let total = 0;
    for (let key in this.receipt) {
      console.log(`Товар: ${key}, количество: ${this.receipt[key].count}`);
      total += this.receipt[key].count * this.receipt[key].price;
    }
    console.log(`Общая сумма: ${total}`);
  };
  this.lockOrder = function () {
    this.isLock = true;
    console.log("Заказ заблокирован!");
  };
  this.unlockOrder = function () {
    this.isLock = false;
    console.log("Заказ разблокирован!");
  };
}

const firstOrder = new Order();
firstOrder.addItem({ name: "Пиво", price: 100 }, 5);
firstOrder.getCheck();
firstOrder.removeItem({ name: "Пиво" }, 10);
firstOrder.getCheck();
firstOrder.removeItem({ name: "Пиво" }, 1);
firstOrder.getCheck();
firstOrder.addItem({ name: "Рыбка", price: 50 }, 5);
firstOrder.getCheck();
firstOrder.lockOrder();
firstOrder.addItem({ name: "Печенье", price: 150 }, 1);
firstOrder.removeItem({ name: "Печенье" }, 1);
firstOrder.unlockOrder();
firstOrder.addItem({ name: "Печенье", price: 150 }, 2);
firstOrder.removeItem({ name: "Печенье" }, 1);
firstOrder.getCheck();
