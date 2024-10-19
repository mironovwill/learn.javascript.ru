// Задача:
// Отсортировать этих пользователей сначала по возрасту по возрастанию, а затем по имени в алфавитном порядке, если возраста совпадают.
//     Получить массив уникальных профессий пользователей.
//     Преобразовать массив таким образом, чтобы каждый объект содержал только имя и возраст пользователя.
//     Вернуть итоговый массив в виде строки, где каждый элемент массива разделён запятой и пробелом.
//     Пример данных:
//     javascript
//
// Ожидаемый результат для этого примера:
// "Alice, 28, Charlie, 28, Eve, 22, David, 42"
//
// Условия:
//     Выбери только пользователей с isActive: true.
//     Отсортируй пользователей по возрасту (по возрастанию). Если возраст одинаковый, отсортируй их по имени в алфавитном порядке.
//     Верни массив уникальных профессий пользователей, которые прошли фильтрацию (этот пункт является дополнительным — просто для проверки уникальности данных).
//     Преобразуй каждый объект в строку, оставив только имя и возраст пользователя.
//     Верни итоговую строку, где элементы массива (имя, возраст) разделены запятой и пробелом.
//     Задача проверяет умение работать с фильтрацией, сортировкой, уникальной обработкой данных, а также преобразованием объектов в строки.

const users = [
    { name: 'Alice', age: 28, profession: 'Engineer', isActive: true },
    { name: 'Blank', age: 28, profession: 'Engineer', isActive: true },
    { name: 'Bob', age: 34, profession: 'Doctor', isActive: false },
    { name: 'Charlie', age: 28, profession: 'Engineer', isActive: true },
    { name: 'David', age: 42, profession: 'Teacher', isActive: true },
    { name: 'Eve', age: 22, profession: 'Designer', isActive: true },
]

function generateData(arr) {
    const activeUsers = arr.slice().filter((el) => el.isActive === true)
    const sortedActiveUsers = activeUsers.sort((a, b) => {
        if (a.age < b.age) {
            return -1
        }

        if (a.age > b.age) {
            return 1
        }

        if (a.age === b.age) {
            if (a.name < b.name) {
                return -1
            } else {
                return 1
            }
        }
    })

    const res = []

    sortedActiveUsers.forEach((user) => {
        res.push(user.name, user.age)
    })

    return res.toString()
}

console.log(generateData(users))
