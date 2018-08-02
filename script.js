function arr(N) {
  var numbers = [];
  for (var i = 0; i < N; i++) {
    numbers.push(i);
  }
  return numbers;
}

// console.log(arr(7));

document.querySelector("body").style = "background:lightgray";
document.querySelector("h1").style = "color:white; text-align:center";
var minuteDeg = 180;
document.querySelector("#minuteHand").style =
  "transform: rotate(" + minuteDeg + "deg)";
setInterval(function() {
  var date = new Date();
  var hour = "" + date.getHours();
  if (hour.length == 1) {
    hour = "0" + hour;
  }
  if (hour > 12) {
    hour -= 12;
  }
  function am_pm() {
    if (hour.length == 1) {
      return "AM";
    } else return "PM";
  }
  var minute = "" + date.getMinutes();
  if (minute.length == 1) {
    minute = "0" + minute;
  }
  var second = "" + date.getSeconds();
  if (second.length == 1) {
    second = "0" + second;
  }

  document.getElementById("digital").innerText =
    hour + ":" + minute + ":" + second + " " + am_pm();
}, 1000);

setInterval(function() {
  var date = new Date();
  var second = date.getSeconds();
  var minute = date.getMinutes();
  var hour = date.getHours();
  var secondHand = document.querySelector("#secondHand");
  var minuteHand = document.querySelector("#minuteHand");
  var hourHand = document.querySelector("#hourHand");

  var secondStartDeg = second * 6;
  document.querySelector("#secondHand").style =
    "transform: rotate(" + secondStartDeg + "deg)";

  // percentage of seconds out of a minute, so at 30s thats 50% * 6deg

  var minuteStartDeg = minute * 6 + secondStartDeg / 60;
  document.querySelector("#minuteHand").style =
    "transform: rotate(" + minuteStartDeg + "deg)";
  if (hour > 12) {
    hour -= 12;
  }
  // console.log(secondStartDeg + "deg second");
  // console.log(minuteStartDeg + "deg minute");

  var hourStartDeg = hour * 30 + minuteStartDeg / 60;
  // console.log(hourStartDeg + "deg hour");
  document.querySelector("#hourHand").style =
    "transform: rotate(" + hourStartDeg + "deg)";
}, 1000);

// console.log(image1[0]);

$(document).ready(function() {
  $(".images").on("click", function() {
    var src = $(this).attr("src");
    $("#clock-face").css("background-image", "url(" + src + ")");
  });
});

// console.log(getImg.src);
