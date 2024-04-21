// //Напишите программу, которая считает сумму всех чисел от 1 до заданного пользователем числа.
//
// let sum = 0;
//
// for(let i = 1; i < 20; i++){
//     sum += i
// }
//
// console.log(sum)
//
// //Четные числа:
// // Напишите программу, которая выводит все четные числа от 1 до 100.
//
// for(let i = 1; i < 100; i++){
//     if (i % 2 === 0) console.log(i)
// }
//
// // Создайте список из нескольких элементов и используйте цикл for для вывода каждого элемента списка.
// const list = ["daniel", "mironov"]
//
// for (let i = 0; i < list.length; i++){
//     console.log(list[i])
// }
//
// //Попросите пользователя ввести строку, а затем выведите эту строку в обратном порядке, используя цикл for.
//
// let str = "Hello!"
// let newStr = ""
//
// for(let i = str.length - 1; i >= 0; i--){
//     newStr += str[i]
// }
// console.log(newStr)
//
//
// //Создайте список и попросите пользователя ввести число. Проверьте, содержится ли введенное число в списке, используя цикл for, и выведите соответствующее сообщение.
//
// const num = 10;
// const listOfNumbers = [1,2,3,4,5,6,7,8,9,10]
//
// for(let i = 0; i < listOfNumbers.length; i++){
//     if(listOfNumbers[i] === num) console.log("Found!")
// }
//
// //Выведите квадраты чисел от 1 до 10, используя цикл for.
//
// const numbers = [1,2,3,4,5,6,7,8,9,10]
//
// for(let i = 1; i < listOfNumbers.length; i++){
//     console.log(i ** 2)
// }
//
// //Попросите пользователя ввести слово, а затем используйте цикл for, чтобы подсчитать количество гласных букв в слове.
//
// const string = "Превысокомногорассмотрительствующий" //6
// const vowels = ["а", "я", "у", "ю", "о", "е", "ё", "э", "и", "ы"] //5
// let vowelsCount = 0;
//
// for(let i = 0; i < string.length; i++){
//     for(let j = 0; j < vowels.length; j++){
//         if(string[i] === vowels[j]){
//             vowelsCount +=1
//         }
//     }
// }
//
// console.log(vowelsCount)

for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        console.log(j)
    }
}