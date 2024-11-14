// Домашняя работа
//1 задание
// let name = prompt("как его имя?")
// alert("Привет " + name)
// console.log("name");

//2 task
// const year=2024
// let birthYear = prompt ("Год вашего рождения", 0);
// let age= year-birthYear
// alert(age)

//3 task
// side_lengh = Number(prompt('Введите длину стороны квадрата: '));
// alert('Периметр квадрата равен: ' + 4 * side_lengh);

//4 task
// let radius = Number(prompt('Введите радиус окружности: '));
// let square = Math.PI * radius ** 2;
// alert('Площадь окружности: '+ square);

//5 task
// let distance = Number(prompt("Введите расстояние между городами в км: "));
// let time = Number(prompt('За какое время вы хотите преодолеть это расстояние в часах? '));
// alert('Вам необходимо двигаться со средней скоростью ' + distance / time + ' км/ч');

//6 task
// const rate = Number(prompt('Введите текущий курс доллара по отношению к евро: '));
// let dollar = Number(prompt('Введите количество долларов для обмена: '));
// alert("По текущему курсу при обмене вы получите " + dollar * rate + " евро");

//7 task
// const GB_MB = 1024;
// let flash_drive = Number(prompt('Каков объем вашей флешки в Гб? '));
// let size = Math.trunc(flash_drive * 800 / GB_MB);
// if (size < 0) {
//   alert('Ваша флешка перезаполнена, освободите пространство');
// }
// else {
//   alert('На флешку поместится ' + size + ' файлов объемом 750 Мб');
// }
//8 task
// let sum = prompt("Cколько у вас в бумажнике денег? ");
// let price = prompt("И почем одна шоколадка? ");
// sum = Number(sum);
// price = Number(price);
// var sell = Math.trunc(sum / price);
// var change = sum - price * sell;
// if (sell < 1) {
//   alert('Сегодня вы на нуле. приходите в другой раз');
// }
// else {
//   alert('Получите свои ' + sell + ' шоколадки, а также сдачу ' + (sum - price * sell) + ' рублей ');
// }
//9 task
// nmb = prompt('Введите трехзначное число: ');
// let a = Number(nmb % 10);
// let b = Number((nmb - a) / 10 % 10);
// let c = Number((nmb - a - b * 10) / 100);
// alert('Перевертыш: ' + (a * 100 + b * 10 + c));
//10 task
// let a = prompt('Введите число для проверки на четность: ');
// a = Number(a);
// alert((parseInt(a) % 2 == 0) ? "ЧЁТНОЕ" : "НЕЧЁТНОЕ");