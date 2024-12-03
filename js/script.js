document.addEventListener("DOMContentLoaded", function () {
  var today = new Date().toISOString().split("T")[0];
  document.getElementById("dateInput").setAttribute("min", today);
});

window.onload = function() {
  var bodyDom = document.querySelector('body');
  var newHearthtml = '<div class="heart-wrapper active small"><div class="heart"><div class="tl"></div><div class="tr"></div><div class="bl"></div><div class="br"></div></div><div class="ring"></div><div class="circles"></div></div>';
  bodyDom.addEventListener('click', function(event) {
    var div = document.createElement('div');
    div.innerHTML = newHearthtml;

    var x = event.pageX - 60;
    var y = event.pageY - 60;
    div.style.position = 'absolute';
    div.style.top = y + 'px';
    div.style.left = x + 'px';
    div.addEventListener("animationend", function() {
      this.style.display = 'none';
    }, false);
    document.querySelector('body').appendChild(div);
  }, false);
};

