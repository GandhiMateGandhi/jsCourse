let money = +prompt("Ваш бюджет на месяц?", ""),
    time = +prompt("Введите дату в формате YYYY-MM-DD?", "");

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

let i = 0;
/* while (i < 2) {
    let spending = prompt("Введите обязательную статью расходов в этом месяце", ""),
        cost = +prompt("Во сколько обойдется?", "");

    if ((typeof(spending) === 'string') && (typeof(spending)) != null && (typeof(cost)) != null && spending != '' && cost != '' && spending.length < 10) {
        console.log('everything is fine');
        appData.expenses[spending] = cost;    
    } 
    i++;
} */
do {
    let spending = prompt("Введите обязательную статью расходов в этом месяце", ""),
    cost = +prompt("Во сколько обойдется?", "");

if ((typeof(spending) === 'string') && (typeof(spending)) != null && (typeof(cost)) != null && spending != '' && cost != '' && spending.length < 10) {
    console.log('everything is fine');
    appData.expenses[spending] = cost;    
} else {
    spending = prompt("Не забудьте ввести две обязательные статьи расходов в этом месяце", "");
    cost = +prompt("Во сколько обойдется?", "");
}
i++;
}
while (i < 2);

/* for (let i = 0; i < 2; i++) {
    let spending = prompt("Введите обязательную статью расходов в этом месяце", ""),
        cost = +prompt("Во сколько обойдется?", "");

    if ((typeof(spending) === 'string') && (typeof(spending)) != null && (typeof(cost)) != null && spending != '' && cost != '' && spending.length < 10) {
        console.log('everything is fine');
        appData.expenses[spending] = cost;    
    } else {
        
    }
}; */

appData.moneyPerDay = appData.moneyData / 30;

alert("Ежедневный бюжет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Таков минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1000) {
    console.log("Средний уровент достатка");
} else if (appData.moneyPerDay >= 1000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Что-то не так");
}