/*
#1 
    "Операторы сравнения"
        Каким будет результат этих выражений?
            let a = 1, b = 1;
            let c = ++a; // ?
            let d = b++; // ?
*/

console.log(5 > 4 === true);
console.log("2" > "12" === true);
console.log((undefined == null) === true);
console.log((undefined === null) === false);
console.log("ананас" > "яблоко" === false);
console.log((null === +"\n0\n") === false);
console.log((null == "\n0\n") === false);
