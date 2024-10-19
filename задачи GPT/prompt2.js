// Задача: "Статистика покупок клиентов"
//
// Условие задачи:
//     У вас есть массив объектов, представляющих покупки клиентов в интернет-магазине. Каждая запись содержит имя клиента, наименование товара, категорию товара и сумму покупки. Ваша задача — создать функцию, которая вернёт отчёт, показывающий, сколько каждый клиент потратил на товары каждой категории.
//     Соберите информацию о том, сколько денег каждый клиент потратил на товары каждой категории.
//     Если у клиента не было покупок в какой-то категории, эта категория не должна быть отображена в его итоговых данных.
//     Имена клиентов должны быть уникальными, дубликаты необходимо удалить. Если клиент повторяется, нужно сложить суммы покупок по категориям.
//     Возвращаемый результат должен быть отсортирован по имени клиента в алфавитном порядке.
//     Все имена клиентов должны начинаться с заглавной буквы (если имя начинается с маленькой буквы).
//
// Пример данных на JavaScript:
// const purchases = [
//     { name: 'john', item: 'laptop', category: 'electronics', amount: 1200 },
//     { name: 'alice', item: 'phone', category: 'electronics', amount: 800 },
//     { name: 'john', item: 'headphones', category: 'electronics', amount: 100 },
//     { name: 'john', item: 'milk', category: 'groceries', amount: 5 },
//     { name: 'alice', item: 'bread', category: 'groceries', amount: 2 },
//     { name: 'bob', item: 'tv', category: 'electronics', amount: 1500 },
//     { name: 'alice', item: 'tv', category: 'electronics', amount: 700 },
//     { name: 'john', item: 'bread', category: 'groceries', amount: 2 },
// ];
//
// Ожидаемый результат на JavaScript:
//     [
//         {
//             name: 'Alice',
//             categories: {
//                 electronics: 1500,
//                 groceries: 2
//             }
//         },
//         {
//             name: 'Bob',
//             categories: {
//                 electronics: 1500
//             }
//         },
//         {
//             name: 'John',
//             categories: {
//                 electronics: 1300,
//                 groceries: 7
//             }
//         }
//     ]

const purchases = [
    { name: 'john', item: 'laptop', category: 'electronics', amount: 1200 },
    { name: 'alice', item: 'phone', category: 'electronics', amount: 800 },
    { name: 'john', item: 'headphones', category: 'electronics', amount: 100 },
    { name: 'john', item: 'milk', category: 'groceries', amount: 5 },
    { name: 'alice', item: 'bread', category: 'groceries', amount: 2 },
    { name: 'bob', item: 'tv', category: 'electronics', amount: 1500 },
    { name: 'alice', item: 'tv', category: 'electronics', amount: 700 },
    { name: 'john', item: 'bread', category: 'groceries', amount: 2 },
]

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function getStatistic(arr) {
    const result = arr.reduce((acc, user) => {
        if (!acc[user.name]) {
            acc[user.name] = {
                name: capitalizeFirstLetter(user.name),
                categories: {},
            }
        }

        if (!acc[user.name].categories[user.category]) {
            acc[user.name].categories[user.category] = 0
        }

        acc[user.name].categories[user.category] += user.amount

        return acc
    }, {})

    return Object.values(result).sort((a, b) => a.name.localeCompare(b.name))
}

console.log(getStatistic(purchases))
