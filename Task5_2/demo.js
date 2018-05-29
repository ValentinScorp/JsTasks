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

$(document).ready(function () {
  $('head').append('<link rel="stylesheet" type="text/css" href="demo.css">');
});

function selectChanged() {
  alert(document.getElementById('sel-list').value);
}

function clickCheckbox() {
  var checkbox = document.getElementById('check-me');
  if (checkbox.checked == true) {
    if (document.getElementById('counter') == null) {
      $parent = $('<div>', { id: 'parent-div' }).appendTo(document.body);
      $('<div>', { id: 'counter', value: '0' }).appendTo($parent);
      $('#counter').animate({ marginRight: '+=300px' }, 1000);
    }
  } else {
    $('#parent-div').remove();
  }
}

function clickButton() {
  var div = document.getElementById('counter');
  if (div != null) {
    var value = Number(div.getAttribute('value'));
    value += 1;
    div.setAttribute('value', String(value));
  }
}
