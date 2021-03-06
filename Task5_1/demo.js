// ======== P1 =============
// Implement same block of tasks as listed in Task2 card, but this time with help of jquery
// This block should have 4 result links

// Task 2
// P1
// Создать на странице 3 и элемента (тэга) с каким-то значением. 1) должен иметь аттрибут (attribute) id 2-3) должены иметь аттрибут (attribute)class с одинаковым значением 4) должен иметь аттрибут (attribute) name
// Написать запросы для поиска каждого элемента и вывести в консоль
// Получить значение(вывести в консоль) и изменить значение (вывести в консоль) ккаждого элемента

// P2
// Изменить фон для каждого элемента по формуле #(11R)(22G)(33B),где R,G,B - порядковый номер элемента. Изменить контур(border) для каждого элемента по формуле: - толщина порядковый номер, - тип закраски рандом, цвет #(5R)(9G)(17B)
// Вставить после каждого элемента div, значение которого будет вычисляться как (цвет)+(порядковый номер) + (смещение от начала страницы)
// Добавить ф-цию, которая будет раставлять каскадом каждый последующий эелемнт. отступ(margin) = порядковый номер * 5 px

// P3
// добавить на страницу input (text) и (checkbox), select(3 options) , radiobutton.
// onLoad страницы каждый элемент должет получить значние либо быть выбран

// P4
//Сгенерировать 100 элементов (четный span, нечетный div, каждый 7мой p) со значением равному порядковому номеру на странице и удалить элемент если его порядковый номер равен одному из чисел Фиббоначи (начиная со второго)
// Каждый 9 элемент если не удален и является div-ом добавить img тэг с рандомной картинкой из инета размером 150х150. Массив картинок хранить в коде

$(document).ready(function() {
// P1
    var $div = $("<div>", {"id": "div-id", "class": "common", "name": "div-name"}).text("Div element add with jquery").appendTo(document.body);
    var $input = $("<input>", {"id": "input-id", "class": "common", "name": "input-name", "value": "Input element add with jquery"}).appendTo(document.body);
    var $button = $("<button>", {"id": "button-id", "class": "common", "name": "button-name", "text": "Button element add with jquery"}).appendTo(document.body);

    $div.text("change div");
    $input.val("change input");
    $button.text("change button");

    console.log($("#div-id").text());
    console.log($("#input-id").val());
    console.log($("#button-id").text());

// P2
    $div.css("background-color", "#6FDD4B");
    $input.css("background-color", "#70DE4C");
    $button.css("background-color", "#71DF4D");

    $div.css("border-width", "1px");
    $input.css("border-width", "2px");
    $button.css("border-width", "3px");

    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    $div.css("border-color", getRandomColor());
    $input.css("border-color", getRandomColor());
    $button.css("border-color", getRandomColor());

    function rgbToInt(in_rgb) {
    	var rgb = in_rgb.replace(/^rgb?\(|\s+|\)$/g,'').split(',');
    	var r = parseInt(rgb[0]);
    	var g = parseInt(rgb[1]);
    	var b = parseInt(rgb[2]);
    	var c = (r<<16)+(g<<8)+(b);
    	return c;
    }

    $div.after($("<div>").text(rgbToInt($div.css("border-color")) + 1 + parseInt($div.position().top)));
    $input.after($("<div>").text(rgbToInt($input.css("border-color")) + 2 + parseInt($input.position().top)));
    $button.after($("<div>").text(rgbToInt($button.css("border-color")) + 3 + parseInt($button.position().top)));

    var marginCount = 0;
    function addElement(elementTag, elementId, text) {
        $elem = $(elementTag, { "id": elementId, "text": text}).appendTo(document.body);
        $elem.css("margin-left", (marginCount * 5).toString() + "px");
        marginCount += 1;
    }
    addElement("<div>", "id-test1", "some text");
    addElement("<div>", "id-test2", "some text");
    addElement("<div>", "id-test3", "some text");
    addElement("<div>", "id-test4", "some text");

// P3
    var $div2 = $("<div>", { "id": "div2-d" }).text("Text element").appendTo(document.body);
    var $chkbx = $("<input>", {"type": "checkbox", "id": "checkbox-id"}).appendTo(document.body);
    var $select = $("<select>", {"id": "select-id"}).appendTo(document.body);
    $select.append($("<option>").text("option 1"));
    $select.append($("<option>").text("option 2"));
    $select.append($("<option>").text("option 3"));
    var radio = $("<input>", {"type": "radio", "id": "radio-id"}).appendTo(document.body);

    $div2.text("onload");
    $chkbx.prop("checked", true);
    $select.val("option 3");
    radio.prop("checked", true);

// P4
    for (var i = 1; i <= 100; i++) {
		var tag;
		if (i % 2 == 0) {
			tag = "<span>";
		} else {
			tag = "<div>";
		}
		if ((i % 7 == 0)) {
			tag = "<p>";
		}
        $(tag, {"id": i.toString(), "text": tag.replace(/[<>]/g, '') + i.toString() }).appendTo(document.body);
}

var fibo = [2, 3, 5, 8, 13, 21, 34, 55, 89];

for (var f in fibo) {
	$("#" + fibo[f].toString()).remove();
}


var images = ["https://placeimg.com/150/150/arch",
    			"https://placeimg.com/150/150/nature",
    			"https://imgplaceholder.com/150x150/cccccc/757575/fa-bank",
    			"https://imgplaceholder.com/150x150/cccccc/757575/fa-bitcoin",
    			"https://imgplaceholder.com/150x150/cccccc/757575/fa-car",
    			"https://imgplaceholder.com/150x150/cccccc/757575/fa-database",
    			"https://imgplaceholder.com/150x150/cccccc/757575/fa-battery-quarter",
    			"https://imgplaceholder.com/150x150/cccccc/757575/fa-arrow-circle-left",
    			"https://imgplaceholder.com/150x150/cccccc/757575/fa-apple",
    			"https://imgplaceholder.com/150x150/cccccc/757575/fa-cart-arrow-down",
    			"https://imgplaceholder.com/150x150/cccccc/757575/fa-bell" ];

var imageIndexes = [];
for (var i = 9; i < 100; i+=9) {
	imageIndexes.push(i);
}
for (var i in imageIndexes) {
    $("#" + imageIndexes[i].toString()).append($("<img>", {"src": images[i]}));
}

});
