// crear un servidor de express
//importar express
import express from "express";
//nos traemos el archivo filmRoutes
import { router as routerFilms } from "./routes/filmsRoutes";

const PORT = process.env.PORT || 3000;

//ejecutar express y guardalo en la constante app
const app = express();

//le decimos a la app que use lo que nos hemos traido de router
app.use("/films", routerFilms)
//empezar a crear la logica

//crear primera url del backend (endpoints)
//la hemos llevado toda a filmRoutes
// /:id es el parametro dinamico de la ruta , da igual que tengas 1 o 2000 ids que se va concatendo
//habilita un puerto donde lo dejas escuchando, primer parametro un puerto y como segundo la funcion callback

app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`);
});
