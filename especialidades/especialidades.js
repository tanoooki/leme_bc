function hide() {
    var x = document.getElementById("especDescr");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

function rotate() {
    document.querySelector('.seta')
    .style.transform = 'rotate(0deg)';
}