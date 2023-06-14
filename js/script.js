function askName() {
  let name = prompt("Яке ваше ім'я?");
  while (!isValidName(name)) {
    name = prompt("Введено некоректні дані, введіть ваше ім'я ще раз:");
  }
  return name;
}

function isValidName(name) {
  return isNaN(Number(name)) && name.trim() !== "";
}

function askAge() {
  let age = parseInt(prompt("Скільки вам років?"));
  while (!isValidAge(age)) {
    age = parseInt(prompt("Введено некоректні дані, введіть ваш вік ще раз:"));
  }
  return age;
}

function isValidAge(age) {
  return !isNaN(age) && age > 0;
}

function askOtvet() {
  return confirm("Ви курите? OK - якщо так, Скасувати - якщо ні.");
}

function displayResult(Myname, age, otvet) {
  if (age < 18 && !otvet) {
    return "Молодець " + Myname + "! Гарний приклад для своїх однолітків.";
  } else if (age < 18 && otvet) {
    return Myname + ", а твої батьки знають про це?";
  } else if (age >= 18 && !otvet) {
    return "Супер " + Myname + "! Мабуть ще й спортом займаєшся!";
  } else if (age >= 18 && otvet) {
    return "Що ж " + Myname + ", це твій вибір. Але я не радив би курити.";
  }
}

let Myname = askName();
let age = askAge();
let otvet = askOtvet();

let result = displayResult(Myname, age, otvet);

console.log(result);
