const express = require('express');
const app=express();
const path = require ('path');

const publicPath=path.resolve(__dirname,'./public');
app.use(express.static(publicPath));

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/index.html"));
});
app.get('/producto',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/producto.html"));
});
app.get('/carrito',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/carrito.html"));
});
app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/login.html"));
});

app.get('/register',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/register.html"));
});


app.listen(3000,()=>{
    console.log("estamos probando")
});