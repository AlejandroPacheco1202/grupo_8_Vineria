const path = require('path');

const mainController={
    index: (request, response)=>{response.sendFile(path.join(__dirname,'../views/index.html'))},
    producto:(request, response)=>{response.sendFile(path.join(__dirname,'../views/producto.html'))},
    carrito:(request, response)=>{response.sendFile(path.join(__dirname,'../views/carrito.html'))},
    login:(request, response)=>{response.sendFile(path.join(__dirname,'../views/login.html'))},
    register:(request, response)=>{response.sendFile(path.join(__dirname,'../views/register.html'))} 
};





module.exports=mainController;
