var inputs = [];
var out = document.getElementById("calc__output");
for (var i = 0; i < 10; i++) {
  let a = i;
  document.getElementById(a.toString()).addEventListener("click", function(){button_clicked(a.toString());});
}
document.getElementById("-").addEventListener("click", function(){button_clicked("-");});
document.getElementById("+").addEventListener("click", function(){button_clicked("+");});
document.getElementById("*").addEventListener("click", function(){button_clicked("*");});
document.getElementById("/").addEventListener("click", function(){button_clicked("/");});

document.getElementById("C").addEventListener("click",delete_last);
document.getElementById("AC").addEventListener("click", delete_all);
document.getElementById("=").addEventListener("click", evaluate);



function button_clicked(input){
  inputs.push(input.toString());
  out.innerHTML = "";
  for (var i = 0; i < inputs.length; i++) {
    out.innerHTML = out.innerHTML + inputs[i];
  }

}

function delete_last(){
  document.getElementById("calc__output").innerHTML = "";
  for (var i = 0; i < inputs.length - 1; i++) {
    document.getElementById("calc__output").innerHTML = document.getElementById("calc__output").innerHTML + inputs[i];

  }
  inputs.pop();
}

function delete_all(){
  out.innerHTML = "";
  while (inputs.length > 0) {
    inputs.pop();
  }
}
function evaluate(){
  let result = inputs.join("");
  while (inputs.length > 0) {
    inputs.pop();
  }
  let res = eval(result);
  inputs.push(res);
  document.getElementById("calc__output").innerHTML = res;
}
