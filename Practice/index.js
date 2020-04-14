let num = 100;

/* if (num < 90) {
    console.log('Nope');
} else if (num < 11) {
    console.log('Yep');
} else {
    console.log('Nothing is right');
}

(num == 100) ? console.log('Yep') : console.log('Nope'); */

switch (num) {
    case num > 90:
        console.log('more than 90');
        break;
    case num <= 100:
        console.log('less than 110');
        break;
    case 100:
        console.log('Thats right');
        break;
    default:
        console.log('idk whats going on');
        break;
}