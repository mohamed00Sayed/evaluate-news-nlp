import dotenv from 'dotenv'
import fetch from 'node-fetch'
import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

dotenv.config()

//const mockAPIResponse = require('./mockAPI.js')


const app = express()

const  key = process.env.API_KEY

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// Cors for cross origin allowance
app.use(cors())

app.use(express.static('dist'))


app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

app.post('/analyze', async (req, res)=> {
    const url = req.body.url
    let response = 
    await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${key}&url=${url}&lang=en`, { method: "POST" })
    
    const data = await response.json()
    console.log(data)
    res.json({
      agreement: data.agreement,
      subjectivity: data.subjectivity,
      confidence: data.confidence,
      irony: data.irony
    })
})


