let link = document.querySelector(".login-link");
let popup = document.querySelector(".modal-login");
let login = popup.querySelector("[name=login]");
let form = popup.querySelector("form");
let password = popup.querySelector("[name=password]");
let overlay = document.querySelector(".modal-overlay");
let storage = localStorage.getItem('login');


link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");

	if (storage) {
		login.value = storage;

	}

});
link.addEventListener("click", function (evt) {
	evt.preventDefault();
	overlay.classList.add("modal-show");


});
overlay.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	overlay.classList.remove("modal-show");

})


form.addEventListener("submit", function (evt) {
	if (!login.value || !password.value) {
		evt.preventDefault();
		console.log("введите данные!");

		// alert("не стояк"); 

	} else {
		localStorage.setItem("login", "login.value");
	}


});

let close = document.querySelector(".modal-close");
close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	overlay.classList.remove("modal-show");
});

window.addEventListener('keydown', function (event) {
	const key = event.key; // const {key} = event; in ES6+
	if (key == "Escape") {
		popup.classList.remove("modal-show");
		overlay.classList.remove("modal-show");
	}
});


let mapLink = document.querySelector(".modal-map");
let mapClose = mapLink.querySelector(".modal-close");
let mapOpen = document.querySelector(".js-button");
let mapOpen2 = document.querySelector(".js-button2");

mapOpen.addEventListener('click', function (evt) {
	evt.preventDefault();
	mapLink.classList.add("modal-show");
});


mapClose.addEventListener('click', function (evt) {
	evt.preventDefault();
	mapLink.classList.remove("modal-show");
});
mapOpen2.addEventListener('click', function (evt) {
	evt.preventDefault();
	mapLink.classList.add("modal-show");
});









// let other = document.querySelector(".body");
// other.document.addEventListener('click', function(evt) {
// 	evt.preventDefault();
//     if (other !== slose) {
//         popup.classList.remove("modal-show");
//     }
// });




// var abc = "x";
// while (abc.length <= 7) {
//   console.log(abc);
//   abc = abc + "x";
// }j

// let x="Fizz";
// let y="Buzz";
// for (let  counter = 1; counter<=100;counter++) {
// 	if (counter % 3 == 0);
// 		console.log(x);
// else if (counter % 5 == 0);
// 	console.log(y);
// }




// const number = +prompt('Введите число 0- 3', '');
// if (number === 0) {
// 	alert(' вы ввели 0')
// };

// switch (number) {
// 	case 0:
// 	alert(' вы ввели 0 )');
// 	break;
// }

// let persone = {
// 	name: "Jone",
// 	age: 25,
// 	isMarried: false
// };

// console.log(persone['name']);

// let arr = ['plum', "orange.jpg", 'apple.bmp'];
// console.log(arr[2]);

// console.log('arr'+'- object');
// let answer = +prompt('Сколько тебе 18?',"да");

// console.log(typeof(answer));

// let incr = 10,
// 	decr = 10;
// 	// incr++;
// 	// decr--;
// console.log(incr++);
// console.log(decr--);
// console.log(5%2);
// console.log("2" === 2);

// let isChecked = true,
// 	isClose = true;
// console.log(isChecked && isClose);


// let  money = prompt("Ваш бюджет на месяц?","");
// let time = prompt("Введите дату в формате YYYY-MM-DD","YYYY-MM-DD");

// alert(money);


// let userName = 'Вася';

// function showMessage() {
//   userName = "Петя"; // (1) изменяем значение внешней переменной

//   let message = 'Привет, ' + userName;
//   alert(message);
// }