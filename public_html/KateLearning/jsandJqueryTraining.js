var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow >18){
  greeting = 'Good eve';
}
elseif(hourNow >12){
  greeting = 'Good Morning';
}
else {
  greeting = 'hello';
}
document.write('<h3>' + greeting + '</h3>';)
