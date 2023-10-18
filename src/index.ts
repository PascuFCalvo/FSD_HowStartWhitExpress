// crear un servidor de express

//importar express
import express from "express";

//ejecutar express y guardalo en la constante app
const app = express();

//empezar a crear la logica
   //crear primera url del backend (endpoints)

app.get("/films" , (req, res) => {
   //logica de lo que quieras hacer/devolver
   return res.send("GET films");
})

//otro endpoint

app.post("/films", (req, res)=>{
   //logica para crear peliculas
   return res.send("POST films");
})

app.put("/films", (req, res)=>{
   //logica para crear peliculas
   return res.send("UPDATE films");
})

app.delete("/films", (req, res)=>{
   //logica para crear peliculas
   return res.send("DELETE films");
})



//habilita un puerto donde lo dejas escuchando, primer parametro un puerto y como segundo la funcion callback
app.listen(3000, () => {
   console.log("Server running");
   
})

