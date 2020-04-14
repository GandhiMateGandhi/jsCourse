let money = +prompt("Ваш бюджет на месяц?", "");
let time = +prompt("Введите дату в формате YYYY-MM-DD?", "");

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: '',
    income: [],
    savings: false,
};

let spending = prompt("Введите обязательную статью расходов в этом месяце", "");
let cost = +prompt("Во сколько обойдется?", "");

appData.expenses[spending] = cost;

let budget = alert("Ваш бюджет на один день: " + appData.moneyData / 30);

console.log(appData.expenses);
console.log(appData);