var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var content ={
    content: `<p>
                    Some thing. Some thing.
                    Some thing. Some thing.
                    Some thing. Some thing.
                    Some thing. Some thing.
                </p>
                <p>
                    Some thing. Some thing.
                    Some thing. Some thing.
                    Some thing. Some thing.
                    Some thing. Some thing.
                </p>`
}

function create (data,title) {
    var content = data.content;
    var htmlTemplate=`
    <html>
        <head>
            <title>
                Safeuq - ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href='/ui/style.css' rel='stylesheet' />
        <body>
            <div class='container'>
                <div>
                    <a href="/">Home</a>
                </div><hr>
                <h3> ${title}</h3>
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

app.get('/pic', function (req, res) {
  res.send("https://scontent.fmaa2-1.fna.fbcdn.net/v/t1.0-9/15380327_1161699963948097_5793214425944409063_n.jpg?oh=d6563b06fdaa7ea509d07f91e0f532d8&oe=5B4B3FE7");
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:articleName', function (req, res) {
    var name = req.params.articleName;
  res.send(create(content,name));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
