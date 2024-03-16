//Добавить функциям метод "f.defer(ms)"
Function.prototype.defer = function (ms){
    setTimeout(this, ms)
}

function f() {
    console.log("Hello!");
}

f.defer(1000);

//Добавьте функциям декорирующий метод "defer()"
Function.prototype.defer2 = function (ms){
    let f = this;
    return function(...args) {
        setTimeout(() => f.apply(this, args), ms);
    }
}

function func(a, b) {
    console.log( a + b );
}

func.defer2(1000)(1, 2)
