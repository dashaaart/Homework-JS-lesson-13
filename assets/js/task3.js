var a = +prompt('Введите первое число'); 
var b = +prompt('Введите второе число');
var c = prompt('сложить? вычесть? умножить? поделить?');

switch(calculator) {
    case 'сложить':
        var d = a + b;
        alert(d);
        break;

    case 'вычесть': 
        alert(a - b);
        break;

    case 'умножить': 
        alert(a * b);
        break;

    case 'поделить': 
        alert(a / b);
        break;

    default:
      alert('Не знаю такой математической операции!')
      break
  }
