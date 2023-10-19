// crear un servidor de express
//importar express
import express from "express";

const PORT = process.env.PORT || 3000;

//ejecutar express y guardalo en la constante app
const app = express();


//empezar a crear la logica
   //crear primera url del backend (endpoints)

   // /:id es el parametro dinamico de la ruta , da igual que tengas 1 o 2000 ids que se va concatendo

app.get("/films/:id" , (req, res) => {
   //logica de lo que quieras hacer/devolver

   //como pintar en consola el parametro que hemos metido en la ruta despues de films/ (en la consulta en el thunderclient)
   console.log(req.params)
   //como es un objeto podemos acceder a su id
   console.log(req.params.id)
   //como ya sabemos como recuperar , lo guardamos en una constante
   const filmsId = req.params.id

   console.log("get")
   return res.send("GET films");
   
})

//seguimos creando el resto de endpoints

app.post("/films/:id", (req, res)=>{
   //logica para crear peliculas
   const filmId = req.params.id;
   console.log ("posted film " + filmId)
   console.log("post")
   return res.send("POST films");
})

app.put("/films/:id", (req, res)=>{
   //logica para editar peliculas
   const filmId = req.params.id;
   console.log ("updated film " + filmId)
   console.log("send")
   return res.send("UPDATE films");
})

app.delete("/films/:id", (req, res)=>{
   //logica para borrar peliculas
   const filmId = req.params.id;
   console.log ("deleted film " + filmId)
   console.log("delete")
   return res.send("DELETE films");
})

//habilita un puerto donde lo dejas escuchando, primer parametro un puerto y como segundo la funcion callback
app.listen(PORT, () => {
   console.log(`server running in port ${PORT}`);
   
})

