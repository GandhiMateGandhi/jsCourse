let money,time;

function detectMonthBudget() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = +prompt("Введите дату в формате YYYY-MM-DD?", "");

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

detectMonthBudget();

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
};

function detectDayBudget() {
    for (let i = 0; i < 2; i++) {
        let spending = prompt("Введите обязательную статью расходов в этом месяце", ""),
            cost = +prompt("Во сколько обойдется?", "");
    
        if ((typeof(spending) === 'string') && (typeof(spending))  != null && (typeof(cost)) != null && spending != '' && cost != '' && spending.length < 10) {
            console.log('everything is fine');
            appData.expenses[spending] = cost;    
        } else {
            i = i--;   
        }
    }
}

detectDayBudget(); 

appData.moneyPerDay = (appData.moneyData / 30).toFixed();

alert("Ежедневный бюжет: " + appData.moneyPerDay);

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Таков минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1000) {
        console.log("Средний уровент достатка");
    } else if (appData.moneyPerDay >= 1000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Что-то не так");
    }
}

detectLevel();


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?', ''),
            percent = +prompt('Под какой процент?');

        appData.monthIncome = (save / 100 / 12 * percent).toFixed();
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    for ( let i = 1; i < 4; i++) {
        let optExpenses = prompt('Статья необязательных расходов?', '');
        if ( typeof(optExpenses) != null && optExpenses != '') {
            console.log('optExpenses is fine');
            appData.optionalExpenses[i] = optExpenses;    
        } else {
            i = i--;   
        }
    }
}

chooseOptExpenses();

console.log(appData);