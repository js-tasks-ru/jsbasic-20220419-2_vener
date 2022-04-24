
function print(text) {
  console.log(text);
}


function isValid(name) {
  let test = !(name === null  || 
              name.length < 4 || 
              name.includes(" ") );
  return test;
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}

