//1. Возвращение случайного целого числа
function getRandomInt(from, to) {
  const random = Math.random() * (to + 1 - from) + from;
  if (random >= 0) {
    return ('Запись некорректна, так как диапазон может быть только положительным');
  } else {
    if (from >= to){
      return('Проверьте не равны ли значения, которые Вы ввели и запишите их в порядке возрастания');
    }
  } return Math.floor(random);
}

//2. Проверка максимальной длины строки
function stringLength(checkingString, maxLength) {
  if (checkingString <= maxLength) {
    return true;
  } return false;
}
