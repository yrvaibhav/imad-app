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