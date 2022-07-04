const path = require('path');

const mainController={
    index: (request, response)=>{
        response.render('index')
    },
    producto:(request, response)=>{
        response.render('producto')
    },
    carrito:(request, response)=>{
        response.render('carrito')
    },
    login:(request, response)=>{
        response.render('login')
    },
    register:(request, response)=>{
        response.render('register')
    } 
};





module.exports=mainController;
