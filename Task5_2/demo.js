// ========== P2 ============
// Add 2 input(text) , select with 3-4 options, checkbox and button tag on the page
// Make sure when input user enters text in input #1 each word has capitalized first letter
// For input #2 text should be formatted according to next pattern: (+X) XXX-XX:XX X-XX
// For select menu add listener which alerts new selected value in select menu
// If user checks checkbox then show next animation: div(id='counter') block 100x100 should be
// displayed and start its journey from beginning right side of result block to the end
// of left side.
// If user clicks button then div(id='counter') should increase
// value, basically each click adds +1 to value of div

var fio = document.getElementById('input-name');
var tel = document.getElementById('input-tel');

fio.addEventListener('input', function (e) {
  this.value = this.value.replace(/\b\w/g, function (l) {
    return l.toUpperCase();
  });
});

tel.addEventListener('input', function (e) {
  var input = this.value;
  input = input.replace(/\D/g, '');
  input = input.substring(0, 8);
  var size = input.length;

  if (size == 0) {
    input = input;
  } else if (size < 2) {
    input = '(+' + input;
  } else if (size < 5) {
    input = '(+' + input.substring(0, 1) + ') ' + input.substring(1, 4);
  } else if (size < 7) {
    input = '(+' + input.substring(0, 1) + ') ' + input.substring(1, 4) +
              '-' + input.substring(4, 6);
  } else if (size < 9) {
    input = '(+' + input.substring(0, 1) + ') ' + input.substring(1, 4) +
              '-' + input.substring(4, 6) + ':' + input.substring(6, 8);
  }

  this.value = input;
});

function selectChanged() {
  alert(document.getElementById('sel-list').value);
}

function clickCheckbox() {
  var checkbox = document.getElementById('check-me');
  if (checkbox.checked == true) {
    if (document.getElementById('counter') == null) {
      $parent = $('<div>', { id: 'parent-div' }).appendTo(document.body);
      $('<div>', { id: 'counter', text: '0' }).appendTo($parent);
      $('#counter').animate({ marginRight: '+=300px' }, 1000);
    }
  } else {
    $('#parent-div').remove();
  }
}

function clickButton() {
  var div = document.getElementById('counter');
  if (div != null) {
    var value = Number(div.textContent);
    value += 1;
    div.textContent = value;
  }
}
