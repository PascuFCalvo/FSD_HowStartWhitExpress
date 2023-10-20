// crear un servidor de express
//importar express
import express from "express";
//nos traemos el archivo filmRoutes
import { router as routerFilms } from "./routes/filmsRoutes";
import { AppDataSource } from "../database";
//ejecutar express y guardalo en la constante app
const app = express();

const PORT = process.env.PORT || 3000;
//middleware, para poder leer en formato json lo que le metemos por el body
app.use(express.json());

app.use("/films", routerFilms);

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    
    app.listen(PORT, () => {
      console.log(`server running in port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

 


