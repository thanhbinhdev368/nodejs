const express = require('express')
const router = new express()

router.get('/about', (request, response) =>{
    response.render('about')
   })
   
   router.get('/contact', (request, response) =>{
    response.render('contact')
   })

   module.exports = router