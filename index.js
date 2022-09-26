const express = require('express')
var info = require('./routes/info')
var session = require('express-session')
const app = new express()
const ejs = require('ejs')
app.use(session({
   secret: 'thanhbinh',
   resave: false,
   saveUninitialized: true,
 }))
app.set('view engine','ejs')
app.use(express.static('public'))
app.listen(3000, () => {
 console.log('App listening on port 3000')
})
   app.get('/', (request, response) =>{
    response.render('index')
   })
   app.get('/index.html', (request, response) =>{
    response.render('index')
   })
   app.get('/post/:id', (request, response) =>{
      response.send('bai viet co id la' + request.params.id)
     })
  
app.use('/info',  info)