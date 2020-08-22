var min_1 = document.getElementById("min-1");
var min_2 = document.getElementById("min-2");
var sec_1 = document.getElementById("sec-1");
var sec_2 = document.getElementById("sec-2");


min_1.addEventListener("click", change_min_1);
min_2.addEventListener("click", change_min_2);
sec_1.addEventListener("click", change_sec_1);
sec_2.addEventListener("click", change_sec_2);

document.getElementById("start").addEventListener("click", change_timer, {once: true})

function change_timer(){
  document.getElementById("start").innerHTML = "Wait";
  var seconds = parseInt(sec_2.textContent) + parseInt(sec_1.textContent) * 10 + parseInt(min_2.textContent) * 60 + parseInt(min_1.textContent) * 600;
  for (var i = 0; i < seconds + 1; i++) {
    setTimeout(countdown, i * 1000);
  }
}


function change_min_1(){
  if (min_1.textContent < 9) {
    min_1.innerHTML = parseInt(min_1.textContent) + 1;
  }
  else{
    min_1.innerHTML = "0";
  }
}

function change_min_2(){
  if (min_2.textContent < 9) {
    min_2.innerHTML = parseInt(min_2.textContent) + 1;
  }
  else{
    min_2.innerHTML = "0";
  }
}

function change_sec_1(){
  if (sec_1.textContent < 6) {
    sec_1.innerHTML = parseInt(sec_1.textContent) + 1;
  }
  else{
    sec_1.innerHTML = "0";
  }
}

function change_sec_2(){
  if (sec_2.textContent < 9) {
    sec_2.innerHTML = parseInt(sec_2.textContent) + 1;
  }
  else{
    sec_2.innerHTML = "0";
  }
}
function countd_min_1(){
  if (parseInt(min_1.textContent) > 0) {
    min_1.innerHTML = parseInt(min_1.textContent) - 1;
  }
  else{
    min_1.innerHTML = "9";
  }
}
function countd_min_2(){
  if (parseInt(min_2.textContent) > 0) {
    min_2.innerHTML = parseInt(min_2.textContent) - 1;
  }
  else{
    min_2.innerHTML = "9";
  }
}

function countd_sec_1(){
  if (parseInt(sec_1.textContent) > 0) {
    sec_1.innerHTML = parseInt(sec_1.textContent) - 1;
  }
  else{
    sec_1.innerHTML = "5";
  }
}

function countd_sec_2(){
  if (parseInt(sec_2.textContent) > 0) {
    sec_2.innerHTML = parseInt(sec_2.textContent) - 1;
  }
  else{
    sec_2.innerHTML = "9";
  }
}
function countdown() {
  min_1.removeEventListener("click", change_min_1);
  min_2.removeEventListener("click", change_min_2);
  sec_1.removeEventListener("click", change_sec_1);
  sec_2.removeEventListener("click", change_sec_2);
    if (min_1.textContent == "0" && min_2.textContent == "0" && sec_1.textContent == "0" && sec_2.textContent == "0") {
    document.getElementById("start").innerHTML = "Reset";
    document.getElementById("start").addEventListener("click", function(){
      min_1.innerHTML = "0";
      min_2.innerHTML = '1';
      sec_1.innerHTML = "0";
      sec_2.innerHTML = "0";
      document.getElementById("start").innerHTML = "Start";
      document.getElementById("start").addEventListener("click", change_timer, {once: true})
    }, {once: true})
    document.getElementById("music").play();
    min_1.addEventListener("click", change_min_1);
    min_2.addEventListener("click", change_min_2);
    sec_1.addEventListener("click", change_sec_1);
    sec_2.addEventListener("click", change_sec_2);
  } else if (sec_2.textContent == "0" && sec_1.textContent != "0") {
    countd_sec_2();
    countd_sec_1();
  } else if (sec_2.textContent == "0" && sec_1.textContent == "0" && min_2.textContent != "0") {
    countd_sec_1();
    countd_sec_2();
    countd_min_2();
  } else if (sec_2.textContent == "0" && sec_1.textContent == "0" && min_2.textContent == "0" && min_1.textContent != "0") {
    countd_sec_1();
    countd_sec_2();
    countd_min_2();
    countd_min_1();
  }
  else {
    countd_sec_2();
  }
  console.log("v")
}
