var vvod;

do {
    vvod = prompt("1. Сложение\n2. Вычитание\n3. Деление\n4. Умножение\n5. Возведение в степень\n6. Выход");

    switch(vvod) {
        case '1':
            var a = parseFloat(prompt("Введите a"));
            var b = parseFloat(prompt("Введите b"));
            result = a + b;
            alert("Итого: " + result);
            break;
        case '2':
            var a = parseFloat(prompt("Введите a"));
            var b = parseFloat(prompt("Введите b"));
            result = a - b;
            alert("Итого: " + result);
            break;
        case '3':
            var a = parseFloat(prompt("Введите a"));
            var b = parseFloat(prompt("Введите b"));
            result = a / b;
            alert("Итого: " + result);
            break;
        case '4':
            var a = parseFloat(prompt("Введите a"));
            var b = parseFloat(prompt("Введите b"));
            result = a * b;
            alert("Итого: " + result);
            break;
        case '5':
            var a = parseFloat(prompt("Введите число"));
            var b = parseFloat(prompt("Введите степень"));
            result = Math.pow(a, b);
            alert("Итого: " + result);
            break;
        case '6':
            alert("бб!");
            break;
        default:
            alert("Не то пишешь");
    }
} while (vvod != "6")
