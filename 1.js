

/*
  Есть массив logins с логинами пользователей.
  Написать функцию, addLogin(logins, login) которая:
    1) Получает новый логин и массив всех логинов как аргументы
  
    2) Проверяет валидность логина используя вспомогательную 
       функцию checkLoginValidity(login), которая проверяет 
       количество символов логина и возвращает true если логин 
       подходит под условие длины от 4-х до 16-ти символов 
       включительно, и false если не подходит.
    3) Если логин не валиден, прекратить исполнение функции addLogin 
       и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'.
    4) Если логин валиден, проверить уникальность логина с помощью 
       функции checkIfLoginExists(logins, login), которая проверяет наличие 
       логина в массиве logins, возвращая false если такого логина
       в массиве еще нет, и true если есть.
     
    5) Если checkIfLoginExists вернет false, добавить новый логин 
       в logins и вернуть строку 'Логин успешно добавлен!'. 
       Если checkIfLoginExists вернет true, тогда addLogin не добавляет 
       логин в массив и возвращает строку 'Такой логин уже используется!'.
*/


const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let newLogin = prompt("Введите новый логин", "");

console.log(newLogin);
// logins.push(newLogin);

const addLogin = function(logins, login) {
  let varForCheckLoginValidity = checkLoginValidity(login);

  if (varForCheckLoginValidity) {
    let check = checkIfLoginExists(logins, login);
    console.log(check);
    if (check) {
      alert("Такой логин сущесвует");
    } else {
      logins.push(newLogin);
      console.log(logins);
      alert("Логин успешно добавлен!");
    }
  } else {
    alert("Ошибка! Логин должен быть от 4 до 16 символов");
  }

  return;
};

const checkLoginValidity = function(login) {
  if (typeof login !== "string") {
    return false;
  } else {
    if (login.length >= 4 && login.length <= 16) {
      //   alert("Работает!");
      return true;
    } else {
      return false;
    }
  }
};

const checkIfLoginExists = function(logins, login) {
  let checker = false;
  for (let i = 0; logins.length > i; i++) {
    if (newLogin === logins[i]) {
      checker = true;
    }
  }
  return checker;
};

addLogin(logins, newLogin);
