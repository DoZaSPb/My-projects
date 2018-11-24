
var budget = +prompt("Ваш бюджет?"); 
var shopname = prompt("Название вашего магазина?");

var mainList = {
	budget,
	shopname,
	shopGoods: [],
	employers: 0,
	open: 0
};

for (var i = 0; i < 3; i++) {
	mainList.shopGoods[i] = prompt("Какой тип товаров будем продавать?");
}

alert(mainList.budget / 30);
