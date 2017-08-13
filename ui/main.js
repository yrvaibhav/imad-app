//Counter code
var button = document.getElementById('counter');


button.onclick = function () {
  
  //Create a request object
  var request = new XMLhttpRequest();
  
  //Capture the responce and store it in variable
  request.onreadystatechange = function() {
    if(request.readyState ===XMLhttpRequest.DONE) {
        //Take some action
        if(request.status === 200) {
            var counter = request.responseText;
            var span=document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }  
    //Not done yet
  };
  
  //Make the request
  request.open('GET','http://yrvaibhav.imad.hasura-app.io/counter',true);
  request.send(null);
};

//Submit the name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit.btn');
submit.onclick = function() {
  //make a request the serve and the name
  
  //capture a list of name and render it as a list
    var names = ['name 1','name 2','name 3','name 4'];
    var list = '';
    for(var i=0;i<names.lenght;i++){
    list == '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};