/*
P1
Create an image in the center of result page size 100x100
Create scroll event handler. On scroll up image size should be increased until
250x250 with 15px step, on scroll down decreased to original size.
Implement this both native and jquery ways
P2
Create a DIV tag 250x200px
on CTRL+ E this div becomes a textarea
on CTRL + S all changes should be saved back in div tag and DIV will be shown after that.
on esc all changes should be cleared and div appears with previous text
Implement this both native and jquery ways
P3
Create form with next components: 2 radio buttons, which says "Native" , "jQuery",
2 radio buttons which says "GET" and "POST", and 3 inputs.
If user selects Native, then native code will be used to send a request, otherwise jQuery implementation.
If user selects GET then next field should be shown to the user: deviceId, type, filter,
if POST ,then 3 more is shown: table, name email
create get request(both native js and jquery) with next params: deviceId, type, filter
create a post request (both native js and jquery) with url params as in get and
next body params: table, name, email.
add send button, which invokes selected code.
all requests should be working with https://httpbin.org/ free service
*/

// =================== P1 ==========================
var image1 = document.getElementById('nativeImage');
image1.addEventListener('wheel', function (e) {
  var w = image1.clientWidth;
  var h = image1.clientHeight;
  if (e.deltaY < 0 && w < 250 && h < 250) {
    image1.style.width = String(w + 15) + 'px';
    image1.style.height = String(h + 15) + 'px';
  }

  if (e.deltaY > 0 && w > 100 && h > 100) {
    image1.style.width = String(w - 15) + 'px';
    image1.style.height = String(h - 15) + 'px';
  }

  e.preventDefault();
});

$(document).ready(function () {
  $('#jqueryImage').bind('mousewheel', function (e) {
    var newWidth = $('#jqueryImage').width();
    newWidth += (e.originalEvent.wheelDelta / 120 * 15);
    if (newWidth >= 100 && newWidth <= 250) {
      $('#jqueryImage').width(newWidth);
      $('#jqueryImage').height(newWidth);
    }

    e.preventDefault();
  });
});

// =================== P2 ==========================
document.addEventListener('keydown', function (e) {
  var ndiv = document.getElementById('nativeDiv');
  if (e.ctrlKey && e.code == 'KeyE') {
    e.preventDefault();
    ndiv.contentEditable = 'true';
    return false;
  }

  if (e.ctrlKey && e.code == 'KeyS') {
    e.preventDefault();
    ndiv.contentEditable = 'false';
    return false;
  }

  if (e.code == 'Escape') {
    if (ndiv.contentEditable == 'true') {
      ndiv.innerHTML = '';
      ndiv.contentEditable = 'false';
    }
  }

  return true;
});

document.addEventListener('keyup', function (e) {
  var ndiv = document.getElementById('nativeDiv');
  if (e.code == 'Escape') {
    if (ndiv.contentEditable == 'true') {
      ndiv.innerHTML = '';
      ndiv.contentEditable = 'false';
      return false;
    }
  }

  return true;
});

$(document).ready(function () {
  $(document).bind('keyup', function (key) {
    if (key.ctrlKey && key.keyCode == 69) {
      $('#jqueryDiv').attr('contenteditable', 'true');
    }

    if (key.ctrlKey && key.keyCode == 83) {
      $('#jqueryDiv').attr('contenteditable', 'false');
    }

    if (key.keyCode == 27) {
      if ($('#jqueryDiv').attr('contenteditable') == 'true') {
        $('#jqueryDiv').attr('contenteditable', 'false');
        $('#jqueryDiv').html('');
      }
    }
  });
});

// =================== P3 ==========================
var currentRequest = 0;

function sendButtonClicked() {
  if (currentRequest == 0) {
    return;
  }

  if (document.getElementById('native').checked) {
    var xhr = new XMLHttpRequest();
    var parameters = '';
    var method = '';
    if (currentRequest == 1) {
      method = 'GET';
      parameters = 'get?' + getParam1 + '&' + getParam2 + '&' + getParam3;
    } else {
      method = 'POST';
      parameters = 'post?' + postParam1 + '=' + document.getElementById('input1').value + '&' +
                            postParam2 + '=' + document.getElementById('input2').value  + '&' +
                            postParam3 + '=' + document.getElementById('input3').value;
    }

    xhr.open(method, 'https://httpbin.org/' + parameters, false);
    xhr.send();

    if (xhr.status != 200) {
      alert(xhr.status + ': ' + xhr.statusText);
    } else {
      alert('Response ok!');
    }
  } else if (document.getElementById('jquery').checked) {
    if (currentRequest == 1) {
      $.get('https://httpbin.org/get', {
        deviceId: document.getElementById('input1').value,
        type: document.getElementById('input2').value,
        filter: document.getElementById('input3').value,
      }).
      done(function (data, textStatus, jqXHR) {
        alert('success');
      }).fail(function (jqXHR, textStatus, errorThrown) {
        alert('error: ' + errorThrown);
      });
    } else {
      $.post('https://httpbin.org/post', {
        table: document.getElementById('input1').value,
        name: document.getElementById('input2').value,
        email: document.getElementById('input3').value,
      }).
      done(function (data, textStatus, jqXHR) {
        alert('success');
      }).fail(function (jqXHR, textStatus, errorThrown) {
        alert('error: ' + errorThrown);
      });
    }
  }
}

var getParam1 = 'deviceId';
var getParam2 = 'type';
var getParam3 = 'filter';

var postParam1 = 'table';
var postParam2 = 'name';
var postParam3 = 'email';

function getRadioClicked() {
  currentRequest = 1;
  document.getElementById('input1').value = getParam1;
  document.getElementById('input2').value = getParam2;
  document.getElementById('input3').value = getParam3;
}

function postRadioClicked() {
  currentRequest = 2;
  document.getElementById('input1').value = postParam1;
  document.getElementById('input2').value = postParam2;
  document.getElementById('input3').value = postParam3;
}
