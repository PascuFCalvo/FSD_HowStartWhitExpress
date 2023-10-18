// crear un servidor de express

//importar express
import express from "express";

//ejecutar express y guardalo en la constante app
const app = express();

//habilita un puerto donde lo dejas escuchando, primer parametro un puerto y como segundo la funcion callback
app.listen(3000, () => {
   console.log("Server running");
   
})
