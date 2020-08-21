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

function create_card(num_crds){
  ans = document.getElementById("answer").value;
  que = document.getElementById("question").value;
  cards_array.push(new Flashcard(que, ans, num_crds));

  //Create card
  x = document.createElement("div");
  x.setAttribute("id", "f" + num_crds);
  document.getElementById("flscrds").appendChild(x);
  var c = document.getElementById("f" + num_crds);

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
  c.style.top = 10 * num_crds + "%";
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

function move_card(){
  
}
