var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
    user:'mohamedsafeuq',
    database:'mohamedsafeuq',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password: process.env.DB_PASSWORD
};
var app = express();
app.use(morgan('combined'));

var pool = new Pool(config);
app.get('/access', function (req, res) {
  pool.query('SELECT * FROM test')
  .then(resu => res.send(JSON.stringify(resu.rows)))
  .catch(e => res.status(500).send(e.toString()));
});


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

app.get('/article/:articleName',function(req,res){
    pool.query("SELECT * FROM article WHERE title='"+req.params.articleName+"'")
    .then(function(resu){
        if(resu.rows.length===0)
            resu.status(404).send('Article not found');
        else{
            var articleData = result.rows[0];
            resu.send(create(articleData,articleData.name));
        }
    })
    .catch(e=>res.status(500).send(e.toString()));
});
    
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var names = [];
app.get('/subname',function(req,res){
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});
app.get('/pic', function (req, res) {
  res.redirect("https://scontent.fmaa2-1.fna.fbcdn.net/v/t1.0-9/15380327_1161699963948097_5793214425944409063_n.jpg?oh=d6563b06fdaa7ea509d07f91e0f532d8&oe=5B4B3FE7");
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var counter = 0;
app.get('/counter', function (req, res) {
  counter++;
  res.send(counter.toString());
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

