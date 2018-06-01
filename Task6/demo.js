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

var seconds = 0;
var minutes = 0;
function toTimeFormat(min, sec) {
  function toTwoDigLength(val) {
    if (String(val).length == 1) {
      return '0' + val;
    }

    return String(val);
  }

  return toTwoDigLength(min) + ':' + toTwoDigLength(sec);
}

function Progressbar(id, maxValue) {
  var _this = this;
  this.div = document.getElementById(id);
  if (maxValue == 0) {
    maxValue = 1;
  }

  this.mvalue = maxValue;
  this.setNewValue = function (newValue) {
    _this.div.style.width = 100 - 100 * Number(newValue) / Number(_this.mvalue) + 'px';
  };

  this.reset = function () {
    _this.div.style.width = '100px';
  };
}

var prbar1 = new Progressbar('bar', 2 * 60 + 30);

function Timer(id, min, sec, prbar) {
  var _this = this;
  this.seconds = sec;
  this.minutes = min;
  this.cancel = 0;
  document.getElementById(id).innerHTML = toTimeFormat(_this.minutes, _this.seconds);
  this.pbar = prbar;
  this.secondsCount = function () {
    _this.seconds += 1;
    if (_this.seconds == 0 && _this.minutes < 0) {
      _this.minutes += 1;
      _this.seconds = -59;
    } else if (_this.seconds >= 60) {
      _this.seconds = 0;
      _this.minutes += 1;
    }

    document.getElementById(id).innerHTML = toTimeFormat(_this.minutes, _this.seconds);
    if (_this.pbar) {
      _this.pbar.setNewValue(_this.seconds + 30);
    }

    if (_this.seconds == 0 && _this.minutes == 0) {
      _this.pause();
    }

    if (_this.seconds == 30 && _this.minutes == 2) {
      _this.pause();
    }
  };

  this.play = function () {
    _this.cancel = setInterval(_this.secondsCount, 1000);
  };

  this.pause = function () {
    clearInterval(_this.cancel);
  };

  this.stop = function () {
    if (_this.pbar) {
      _this.pbar.setNewValue(0);
    }

    _this.pause();
  };
}

var downTimer = new Timer('down-time', 0, -30, prbar1);
var upTimer = new Timer('up-time', 2, 0, null);

var playbutton = document.getElementById('div-play');
playbutton.style.cursor = 'pointer';
playbutton.onclick = function () {
  if (playbutton.innerHTML == 'Play') {
    playbutton.innerHTML = 'Pause';
    downTimer.play();
    upTimer.play();
  } else {
    playbutton.innerHTML = 'Play';
    downTimer.pause();
    upTimer.pause();
  }
};

var stopbutton = document.getElementById('div-stop');
stopbutton.style.cursor = 'pointer';
stopbutton.onclick = function () {
  if (stopbutton.innerHTML == 'Stop') {
    downTimer.stop();
    upTimer.stop();
    downTimer = new Timer('down-time', 0, -30, prbar1);
    upTimer = new Timer('up-time', 2, 0, null);
    document.getElementById('div-play').innerHTML = 'Play';
  }
};
