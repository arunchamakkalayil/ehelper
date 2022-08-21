function finder() {
  var x = document.getElementById("mySelect").value;

  if (x == 1) {
    document.getElementById("main").style.display = "block";
    document.getElementById("main").scrollIntoView(60);
  } else {
    document.getElementById("main").style.display = "none";
  }
  if (x == 2) {
    document.getElementById("main-2").style.display = "block";
    document.getElementById("main-2").scrollIntoView(60);
  } else {
    document.getElementById("main-2").style.display = "none";
  }
  if (x == 3) {
    document.getElementById("main-3").style.display = "block";
    document.getElementById("main-3").scrollIntoView(60);
  } else {
    document.getElementById("main-3").style.display = "none";
  }
  if (x == 4) {
    document.getElementById("main-4").style.display = "block";
    document.getElementById("main-4").scrollIntoView(60);
  } else {
    document.getElementById("main-4").style.display = "none";
  }
  if (x == 5) {
    document.getElementById("main-5").style.display = "block";
    document.getElementById("main-5").scrollIntoView(60);
  } else {
    document.getElementById("main-5").style.display = "none";
  }

  if (x == 6) {
    document.getElementById("main-6").style.display = "block";
    document.getElementById("main-6").scrollIntoView(60);
  } else {
    document.getElementById("main-6").style.display = "none";
  }
}

window.addEventListener("load", finder);
