var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articals = {
'artical-1' : {
    title: 'Artical one | Vaibhav YR',
    heading: 'Artical one',
    date: 'August 3 2017',
    content: ` <p>
            This is the conent for my first artical.
        </p>
        <p>
            I'm happy in doing this.
        </p>
        <p>
            This is wonder full course. 
        </p>`
},
'artical-2' : {
    title: 'Artical two | Vaibhav YR',
    heading: 'Artical two',
    date: 'August 3 2017',
    content: ` <p>
            This is the conent for my second artical.
        </p>
        <p>
            I'm happy in doing this.
        </p>
        <p>
            This is wonder full course. 
        </p>`
},
'artical-3' : {
    title: 'Artical three | Vaibhav YR',
    heading: 'Artical three',
    date: 'August 3 2017',
    content: ` <p>
            This is the conent for my three artical.
        </p>
        <p>
            I'm happy in doing this.
        </p>
        <p>
            This is wonder full course. 
        </p>`
}
};

function createTemplate (data) {
    var title = data.title;
    var date= data.date;
    var heading = data.heading;
    var content = data.content;

    var htmlTemplate =`
    <html>
    <head>
        <title>
            ${title}
        </title>
        
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">HOME</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
           ${content}
        </div>
        </div>
    </body>
    </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articalName',function(req,res){
    //articalName == artical-1
    //articales[articalName] == {} content object for artical one
    var articalName = req.params.articalName;
    res.send(createTemplate(articals[articalName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
