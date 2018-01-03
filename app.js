const express = require('express');
const app = express();
const path = require('path');
const mustacheExpress = require('mustache-express');
const handlebars = require('handlebars');
const fs = require('fs');

app.use(express.static(path.join(__dirname, 'public')));

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');

app.get('/login', (req, res) => {
    const context = { title: 'Basic Auth Example', sectionName: 'User', engineName: 'Handlebars'};
    res.render('index', context, function(err, html) {
        context.body = html;
        res.render('layout', context , function(err, htmlString) {
            console.log(htmlString);
            res.send(htmlString);
        })
    })    
});

app.listen(8000, () => {
    console.log('basic-auth app listening on port 8000');
})