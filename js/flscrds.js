class Flashcard {
  constructor(question, answer, id){
    this.answer = answer;
    this.question = question;
    this.id = id;
  }
}
var cards_array = [];
var number = 0;
document.getElementById("add").addEventListener("click", function(){
  create_card(number);
  number++;
  console.log(number);
});

var bool = false;

function create_card(num_crds){
  ans = document.getElementById("answer").value;
  que = document.getElementById("question").value;
  cards_array.push(new Flashcard(que, ans, num_crds));

  //Create card
  x = document.createElement("div");
  x.setAttribute("id", "f" + num_crds);
  document.getElementById("flscrds").appendChild(x);
  var c = document.getElementById("f" + num_crds);


  //create exit icon
  x = document.createElement("i");
  x.style.fontSize = "2rem"
  x.setAttribute("class", "far fa-times-circle");
  c.appendChild(x);;
  c.getElementsByClassName("far")[0].addEventListener("click", function(){
    c.remove();
  })
  dragElement(c);


  //add title
  x = document.createElement("h2");
  x.innerHTML = "Question";
  x.setAttribute("id", "title" + num_crds);
  c.appendChild(x);

  //add answer/question
  q = document.createElement("h2");
  q.innerHTML = que;
  q.setAttribute("id", "text" + num_crds);
  c.appendChild(q);

  //create flip button
  b = document.createElement("button");
  b.innerHTML = "FLIP";
  b.setAttribute("id", "b" + num_crds);
  c.appendChild(b);

  //css for cards
  c.style.borderStyle = "solid";
  c.style.borderWidth = "3px";
  c.style.display = "inline-block";
  c.style.position = "absolute";
  c.style.top = 10 * num_crds + "px";
  c.style.zIndex = num_crds;
  c.style.backgroundColor = "white";

  //change side
  document.getElementById("b" + number).addEventListener("click", function(){change_side(num_crds);});
}

function change_side(x){
  if (document.getElementById("title" + x).textContent == "Question") {
    document.getElementById("title" + x).innerHTML = "Answer";
    document.getElementById("text" + x).innerHTML = cards_array[x].answer;
  }
  else {
    document.getElementById("title" + x).innerHTML = "Question";
    document.getElementById("text" + x).innerHTML = cards_array[x].question;
  }
}



//this function is from w3chools' function
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
