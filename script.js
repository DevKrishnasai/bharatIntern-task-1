document.addEventListener("DOMContentLoaded", function () {
  let element = document.getElementById("dot");
  let dots = "";
  let x = 0;

  function appendDot() {
    dots += ".";
    element.textContent = dots;
    x += 1;
    if (x === 6) {
      x = 0;
      dots = "";
    }
    setTimeout(appendDot, 200);
  }

  setTimeout(appendDot, 200);
});
