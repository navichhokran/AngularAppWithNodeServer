// not used in current deployment at firebase ( https://myangularproject-da44a.firebaseapp.com/ )

const express = require('express');
const router = express.Router();

const axios = require('axios');
const photosAPI = 'https://jsonplaceholder.typicode.com/photos';
router.get('/', (req, res) =>{

    axios.get(photosAPI).then(photos => {
        res.send(photos.data);
    })
})

module.exports = router;