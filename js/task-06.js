let input;
const numbers = [];
let total = 0;
while (input !== null) {
    input = prompt('Введите число');
    numbers.push(Number(input));
}
for (number of numbers) {
        total += number;
}
console.log(`Общая сумма чисел равна ${total}`);


//_________________________

let input;
const numbers = [];
let total = 0;
do {
  input = prompt("Введите число");
  if (input !== null) {
    numbers.push(Number(input));
  }
} while (input !== null);
for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}
console.log(`Общая сумма чисел равна ${total}`);