var min_1 = document.getElementById("min-1");
var min_2 = document.getElementById("min-2");
var sec_1 = document.getElementById("sec-1");
var sec_2 = document.getElementById("sec-2");


min_1.addEventListener("click", change_min_1);
min_2.addEventListener("click", change_min_2);
sec_1.addEventListener("click", change_sec_1);
sec_2.addEventListener("click", change_sec_2);


function change_min_1(){
  if (document.getElementById("min-1").textContent < 9) {
    document.getElementById("min-1").innerHTML = parseInt(document.getElementById("min-1").textContent) + 1;
  }
  else{
    document.getElementById("min-1").innerHTML = "0";
  }
}

function change_min_2(){
  if (document.getElementById("min-2").textContent < 9) {
    document.getElementById("min-2").innerHTML = parseInt(document.getElementById("min-2").textContent) + 1;
  }
  else{
    document.getElementById("min-2").innerHTML = "0";
  }
}

function change_sec_1(){
  if (document.getElementById("sec-1").textContent < 6) {
    document.getElementById("sec-1").innerHTML = parseInt(document.getElementById("sec-1").textContent) + 1;
  }
  else{
    document.getElementById("sec-1").innerHTML = "0";
  }
}

function change_sec_2(){
  if (document.getElementById("sec-2").textContent < 9) {
    document.getElementById("sec-2").innerHTML = parseInt(document.getElementById("sec-2").textContent) + 1;
  }
  else{
    document.getElementById("sec-2").innerHTML = "0";
  }
}
function countd_min_1(){
  if (document.getElementById("min-1").textContent > 0) {
    document.getElementById("min-1").innerHTML = parseInt(document.getElementById("min-1").textContent) - 1;
  }
  else{
    document.getElementById("min-1").innerHTML = "9";
  }
}
function countd_min_2(){
  if (document.getElementById("min-2").textContent > 0) {
    document.getElementById("min-2").innerHTML = parseInt(document.getElementById("min-2").textContent) - 1;
  }
  else{
    document.getElementById("min-2").innerHTML = "9";
  }
}

function countd_sec_1(){
  if (document.getElementById("sec-1").textContent > 0) {
    document.getElementById("sec-1").innerHTML = parseInt(document.getElementById("sec-1").textContent) - 1;
  }
  else{
    document.getElementById("sec-1").innerHTML = "6";
  }
}

function countd_sec_2(){
  if (document.getElementById("sec-2").textContent > 0) {
    document.getElementById("sec-2").innerHTML = parseInt(document.getElementById("sec-2").textContent) - 1;
  }
  else{
    document.getElementById("sec-2").innerHTML = "9";
  }
}
function coundown(){
  let min = parseInt(min_1.textContent.toString() + min_2.textContent.toString());
  let sec = parseInt(sec_1.textContent.toString() + sec_2.textContent.toString());
  min_1.removeEventListener()
  let start = setInterval(function(){

  }, 1000)
}
