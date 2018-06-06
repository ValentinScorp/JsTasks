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
2 radio buttons which says "GET" and "POST", and 3 inputs. If user selects Native,
then native code will be used to send a request, otherwise jQuery implementation. if
user selects GET then next field should be shown to the user: deviceId, type, filter,
if POST ,then 3 more is shown: table, name email
create get request(both native js and jquery) with next params: deviceId, type, filter
create a post request (both native js and jquery) with url params as in get and
next body params: table, name, email.
add send button, which invokes selected code.
all requests should be working with http://requestb.in/ service
*/
// =================== P1 ==========================
var image1 = document.getElementById('nativeImage');
image1.addEventListener('wheel', function (e) {
  var w = image1.clientWidth;
  var h = image1.clientHeight;
  if (e.deltaY < 0 && w < 250 && h < 250) {
    image1.style.width = w + 15;
    image1.style.height = h + 15;
  }

  if (e.deltaY > 0 && w > 100 && h > 100) {
    image1.style.width = w - 15;
    image1.style.height = h - 15;
  }
});

$(document).ready(function () {
  $('#jqueryImage').bind('mousewheel', function (e) {
    var newWidth = $('#jqueryImage').width();
    newWidth += (e.originalEvent.wheelDelta / 120 * 15);
    if (newWidth >= 100 && newWidth <= 250) {
      $('#jqueryImage').width(newWidth);
      $('#jqueryImage').height(newWidth);
    }
  });
});

// =================== P2 ==========================
document.addEventListener('keydown', function (e) {
  if (e.ctrlKey && e.code == 'KeyE') {
    document.getElementById('nativeDiv').contentEditable = 'true';
  }

  if (e.ctrlKey && e.code == 'KeyS') {
    document.getElementById('nativeDiv').contentEditable = 'false';
  }  
});
