function welcomeMsg(msg){
  event = "onclick";
  var name = prompt("what is your name?");
  return name;
  var msg = name;
}

var firstName = welcomeMsg("Hi" + name);

function closeMe(){
// find the element
x=document.getElementById("demo");
// option 1: change the style attribute directly
// x.style.display="none";
//option 2: change the class
x.className="closed";
}

function openMe(){
//find the element
x=document.getElementById("demo");
//option 1: change the style attribute directly
// x.style.display="block";

//option 2: change the class
x.className="open";
}

function enterName(){
document.getElementById('Name').InnerHTML="welcomeMsg";
  
}
