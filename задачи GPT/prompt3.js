// Задача: "Анализ словаря и проверка анаграмм"
//
// Условие задачи:
// У вас есть массив строк, представляющих слова из большого словаря. Ваша задача — написать функцию, которая найдёт все группы анаграмм в этом массиве. Анаграмма — это слова, составленные из одних и тех же букв, но в разном порядке (например, "listen" и "silent").
//
// Нужно вернуть массив массивов, где каждая вложенная группа содержит слова, являющиеся анаграммами.
// Если слово не имеет анаграмм, его не нужно включать в результат.
// Порядок слов в каждой группе должен быть отсортирован в алфавитном порядке.
// Итоговый результат (массив групп анаграмм) должен быть отсортирован по числу элементов в группе по убыванию, а если число одинаково — по алфавитному порядку первого элемента в группе.
//

const words = [
    'listen',
    'silent',
    'enlist',
    'rat',
    'tar',
    'car',
    'arc',
    'elvis',
    'lives',
    'evil',
    'vile',
    'bat',
    'tab',
    'god',
    'dog',
]

function getAnagram(string) {
    return string.split('').sort().join('')
}

function getAnagramsArray(arr) {
    const result = arr.reduce((acc, str) => {
        const sortedStr = getAnagram(str)

        if (!acc[sortedStr]) {
            acc[sortedStr] = []
        }

        acc[sortedStr].push(str)

        return acc
    }, {})

    const filteredAnagrams = Object.values(result).filter(
        (group) => group.length > 1
    )

    return filteredAnagrams
        .map((group) => group.sort())
        .sort((a, b) => b.length - a.length || a[0].localeCompare(b[1]))
}

console.log(getAnagramsArray(words))
