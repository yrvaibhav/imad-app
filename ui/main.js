//Counter code
var button = document.getElementById('counter');
var counter=0;

button.onclick = function () {
  
  //Make a request to the endpoint
  
  //Capture the responce and store it in variable
  
  //Reader the variable in the correct span
  counter = counter + 1;
  var span=document.getElementById('count');
  span.innerHTML = counter.toString();
};