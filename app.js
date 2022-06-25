const express = require('express');
const app = express();
const path = require ('path');
const publicPath=path.resolve(__dirname,'./public');
app.use(express.static(publicPath));

const mainRouter = require('./routers/mainRouter');
app.use('/', mainRouter);


app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000")
});