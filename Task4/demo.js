// ============ P1 ===================
// Создать класс 'кодер' свойства: уровень (junior, middle, senior); опыт в годах; фио; возраст; пол;
// Написать ф-цию наследования через прототип, которая принимает child и parent параметры
// Написать ф-цию расширения свойств для класса. Добавить два свойства side и lang.
// Создать объекты с рандомным заполнением [front, server] для side и [c++, java, javascript, python] ,которые являются экземпляром класса child
// Добавить ф-цию в класс changeExp ,которая изменяет свойство experience на то значение ,которое приходит. Добавить валидацию: только число и результат не должен быть отрицательный, если входное значение не прошло валидацию, то вывести в консоль сообщение с входящим значением. Ф-ция должна реализовывать замыкание на свойство experience. Добавить ф-ции add, sub в класс child, которые используют ф-цию changeExp. Сделать рандомное изменение объектов по три раза с несколькими невалидными значениями и вывести в консоль.
function Coder() {
	var coder = this;
	this.level = "junior";
  this.experience = 1;
  this.fio = "John Smith";
  this.age = 20;
  this.gender = "male";
  this.changeExp = function(newExp) {
  	if (typeof(newExp) == "number") {
    	if (newExp >= 0) {
      	coder.experience = newExp;
        return;
      }
    }
    console.log("Wrong inp in changeExp: " + JSON.stringify(newExp));
  }
}


var randomArr = function(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function SuperCoder(side = randomArr(["front", "server"]), lang = randomArr(["c++", "java", "javascript", "python"])) {
	var supercoder = this;
	Coder.apply(this, arguments);
  this.side = side;
  this.lang = lang;
  this.add = function(exp) {
  	supercoder.changeExp(supercoder.experience + exp);
  }
  this.sub = function(exp) {
  	supercoder.changeExp(supercoder.experience - exp);
  }
}
SuperCoder.prototype = Object.create(Coder.prototype);

SuperCoder.prototype.printName = function() {
	console.log(this.fio.split(" ")[0]);
};

var scoder1 = new SuperCoder();
var scoder2 = new SuperCoder();

scoder1.add("null");
scoder1.sub(4);
scoder1.add(undefined);
scoder2.add(-5);
scoder2.sub({
	val1: 1,
  val2: "language"
});
scoder2.add(null);


// ============ P2 ===================
// Добавить на страницу input и button. По умолчанию в input должно храниться число 0

// Добавить onclick событие, которое увеличивает значение числа в input элементе на +1. Ф-ция должна быть написана через замыкания(closure)
// ============ P3 ===================

// Создать класс, который имеет 3 ф-ции (create, increment, delete_lastItem). Каждая ф-ция имеет прикреплена к кнопке на странице (create, inc, del соответственно).
// Create создает в цикле 20 элементов и прикрепяет их к странице. Каждый элемент представляет из себя блок с 2мя кнопками и числом внутри блока. 1ая кнопка "+1" инкрементирует значение блока на +1. 2ая кнопка "х" удаляет элемент со страницы перед этим выводя индекс на каком был создан компонент. Каждый блок имеет начальное значение равное значению индекса во время какого блок создавался

function MainClass() {
	this.create = function() {
		var b1 = document.createElement("button");
		b1.
	}
	this.increment = function() {
		alert("increment");
	}
	this.delete_lastItem = function() {

	}
}
var main = new MainClass();

document.getElementById("create").onclick = function() { main.create(); }
document.getElementById("inc").onclick = function() { main.increment(); }
document.getElementById("del").onclick = function() { main.delete_lastItem(); }

// increment обновляет текущее значение каждого блока по формуле i + count , где i - это текущий индекс на странице, count - текущее количество элементов на странице.
// delete_lastItem удаляет последний элемент со страницы.
