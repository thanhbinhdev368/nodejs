const express = require('express')
const app = new express()
const ejs = require('ejs')
app.set('view engine','ejs')
app.use(express.static('public'))
app.listen(4000, () => {
 console.log('App listening on port 4000')
})
app.get("/about", (request, response) =>{
    response.send('The about page')
   })
   
   app.get('/', (request, response) =>{
    response.render('index')
   })
   