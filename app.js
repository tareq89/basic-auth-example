require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');


if(process.env.ENV === 'production') {
    
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.static(path.join(__dirname, 'public/build/')));    
    app.get('/', (req, res) => {
        res.sendfile(path.join(__dirname, 'public/build/'));
    });    
}

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log('basic-auth app listening on port ', PORT);
})