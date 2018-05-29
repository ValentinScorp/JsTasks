/*
================= P1 ===============
 Create a table with next elements inside it:
 ROW_1:
  down time counter(span, example -00:30),
  progress bar(div),
  up time counter(span,ex. 02:00 );
ROW_2:
  play,
  stop;
On play button click event:
1) play button text should be changed to 'Pause'
2) down time and up time counters should both increase its absolute value
3) progressbar container should fill its background proportionally to overall time (02:30).
background color for progress bar should be an image(any from internet)
4) when up time counter reaches 02:30 or down time counter reaches 00:00 stop playing
5) check counter for unusual cases like (-00:00) 6)
On "Stop" button click:
1) "Pause" should be set back to play
2) counters should be cleared to initial state
3) progressbar's background should be cleared

==================== P2 =========================
Create a block of 5 images(75x75) in one div
each 2sec randomly fadeIn and fadeOut one image
each 5 seconds switch places for 2 random images
each 9 seconds make 1 random image width and height 120px slowly with 2sec animation
and then set width and height back to 75px with 1sec animation
*/

var body = document.getElementsByTagName('body')[0];
var table = document.createElement('table');
var tableBody = document.createElement('tbody');

var informationRow = document.createElement('tr');
var minusCell = document.createElement('td');
var minusCellText = document.createTextNode('minus cell text');
minusCell.appendChild(minusCellText);

var barCell = document.createElement('td');
var barCellDiv = document.createElement('div');
barCellDiv.style.width = '100px';
barCell.appendChild(barCellDiv);

var plusCell = document.createElement('td');
var plusCellText = document.createTextNode('plus cell text');
plusCell.appendChild(plusCellText);

informationRow.appendChild(minusCell);
informationRow.appendChild(barCell);
informationRow.appendChild(plusCell);

tableBody.appendChild(informationRow);

table.appendChild(informationRow);
body.appendChild(table);
table.setAttribute('border', '2');
