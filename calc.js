var inputs = [];
for (var i = 0; i < 10; i++) {
  let a = i;
  document.getElementById(a.toString()).addEventListener("click", function(){button_clicked(a.toString());});
}
document.getElementById("-").addEventListener("click", function(){button_clicked("-");});
document.getElementById("+").addEventListener("click", function(){button_clicked("+");});
document.getElementById("*").addEventListener("click", function(){button_clicked("*");});
document.getElementById(":").addEventListener("click", function(){button_clicked(":");});

document.getElementById("C").addEventListener("click",delete_last);
document.getElementById("AC").addEventListener("click", delete_all);
document.getElementById("=").addEventListener("click", evaluate);



function button_clicked(input){
  var content = document.getElementById(input).textContent;
  inputs.push(content);
  document.getElementById("calc__output").innerHTML = document.getElementById("calc__output").innerHTML + content;

}

function delete_last(){
  document.getElementById("calc__output").innerHTML = "";
  for (var i = 0; i < inputs.length - 1; i++) {
    document.getElementById("calc__output").innerHTML = document.getElementById("calc__output").innerHTML + inputs[i];

  }
  inputs.pop();
}

function delete_all(){
  document.getElementById("calc__output").innerHTML = "";
  for (var i = 0; i < inputs.length; i++) {
    inputs.pop();
  }
}
function evaluate(){
  let result = inputs.join("");
  for (var i = 0; i < inputs.length; i++) {
    inputs.pop();
  }
  let res = eval(result);
  inputs.push(res);
  document.getElementById("calc__output").innerHTML = res;
}
