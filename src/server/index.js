const dotenv = require('dotenv')
dotenv.config()

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const MeaningCloud = require('meaning-cloud')
const bodyParser = require('body-parser')


const app = express()

const  meaning = new MeaningCloud({
  key: process.env.API_KEY,
})

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))


app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

app.post('/analyze', function (req, res) {
    const url = req.body.url
    
    analyze(url)
    
    //console.log(url)
    res.send(mockAPIResponse)
})

function analyze(url){
  console.log('::: in analyze :::')
  
  meaning.sentiment_analysis({
    key: process.env.API_KEY,
    lang: 'en',
    txt: 'this is so bad'
  }).then(res => {
    console.log(res)
  }).catch(err => console.log(err))
}

