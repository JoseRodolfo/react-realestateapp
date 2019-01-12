const express = require('express')

const serveStatic = require('serve-static')

const path = require('path')

// create the express app
const app = express()

// create middlwwareto handle serving the app
app.use("/", serveStatic(path.join (__dirname, '/public')))

// serve the index by default
app.get("/", function(req, res){
  res.sendFile(__dirname + '/public/index.html')
})

// default port to run app on
const port = process.env.PORT || 5000

app.listen(port)

// feedback that this is actually running
console.log('server started port' + port)
