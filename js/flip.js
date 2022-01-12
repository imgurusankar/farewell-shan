var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("hiddenFlip");

var flipBox = document.getElementsByClassName("flip-box");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/* jQuery */
$(".flip-box").click(function () {
  var tempID = $(this).attr("id");
  $(`#${tempID}`).remove();
});

/*Count down Timer */

var countDownDate = new Date("Jan 14, 2022 17:30").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element

  document.getElementById("dday").innerHTML = days;
  document.getElementById("dhour").innerHTML = hours;
  document.getElementById("dmin").innerHTML = minutes;
  document.getElementById("dsec").innerHTML = seconds;
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementsByClassName("countdown").innerHTML =
      "All the best for you dear Shan.. We will miss you Shan..";
  }
}, 1000);
