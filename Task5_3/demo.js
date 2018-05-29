/*
Add div (65x65) tag to the page. [Добавить div тэг на страницу размерами 65х65]
Add 9 buttons.Add 9 different types of animation for each button click.
Div's speed animation should be exact same as curve of current animation.
[ добавить 9 кнопок. Каждая кнопка должна запускать анимацию div-а,
но разным ф-циями(линейная,экспоненциальная,...).
Скорость движение Div описано ф-циями анимайции ]
(http://api.jqueryui.com/easings/)
Div background color should be changing during animation from rgb(200, 70, 50) to rgb(30, 220, 150)
[Фон div-а должен меняться от rgb(200, 70, 50) до rgb(30, 220, 150) ]
*/

$(document).ready(function () {
  $('head').append('<link rel="stylesheet" type="text/css" href="demo.css">');
});

function move(type) {
  $('#div-id').animate({
      left: '+=400',
    }, {
      duration: 2000,
      specialEasing: {
        left: type,
      },
    }).animate({
        left: '-=400',
      }, {
        duration: 2000,
        specialEasing: {
          left: type,
        },
      });
}
