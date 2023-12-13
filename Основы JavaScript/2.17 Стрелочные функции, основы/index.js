//Замените код Function Expression стрелочной функцией:

const ask = (question, yes, no) => confirm(question) ? yes() : no()

ask(
    "Вы согласны?",
    () =>  alert("Вы согласились."),
    () =>   alert("Вы отменили выполнение.")
);