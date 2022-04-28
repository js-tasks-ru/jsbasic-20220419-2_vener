let calculator = {
  a: 10,
  b: 5,
	read (){
    this.a = +prompt('Введите значение a:', '');
    this.b = +prompt('Введите значение b:', '');
    
  },
  sum (){
    return (this.a + this.b);
  },
  mul () {
    return (this.a * this.b);
  },
};


// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
