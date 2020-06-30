// 3* Сделайте калькулятор используя ветвления, prompt'ы 
// и так далее(то, что успели пройти)

var a = +prompt('Введите первое число'); 
var b = +prompt('Введите второе число');
var c = prompt('сложить? вычесть? умножить? поделить?');

switch(c) {
    case 'сложить':
        var d = a + b;
        alert(d);
        break;

    case 'вычесть': 
        var e = a - b;
        alert(e);
        break;

    case 'умножить': 
        var f = a * b;
        alert(a * b);
        break;

    case 'поделить': 
        var g = a / b;
        alert(a / b);
        break;

    default:
      alert('Не знаю такой математической операции!')
      break
  }
