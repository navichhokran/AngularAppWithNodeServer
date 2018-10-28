// this is a server file for node server.The app that is deployed on  firebase (https://myangularproject-da44a.firebaseapp.com/) doesnt use this file.
const express = require('express');
const path = require('path');
const router = express.Router();
const photos = require('./server/routes/photos');
const app = express();
const PORT = process.env.PORT || 4600;


app.listen(PORT, (req , res ) => {
    console.log('RUNNING');
})

app.use(express.static(path.join(__dirname,'dist')));
app.use('/photos', photos)

app.get('*', (req, res) =>{  
    res.sendFile(path.join(__dirname,'dist/index.html'));
})

