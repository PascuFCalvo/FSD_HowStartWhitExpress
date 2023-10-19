import { Router } from "express";

const router = Router();

//le hemos cambiado app x router porque ya no usamos app

router.get("/films", (req, res) => {
   //logica de lo que quieras hacer/devolver
   console.log("get");
   return res.send("GET films");
 });
 
 router.get("/films/:id", (req, res) => {
   //logica de lo que quieras hacer/devolver
   //como pintar en consola el parametro que hemos metido en la ruta despues de films/ (en la consulta en el thunderclient)
   console.log(req.params);
   //como es un objeto podemos acceder a su id
   //como ya sabemos como recuperar , lo guardamos en una constante
   const filmsId = req.params.id;
   console.log(filmsId);
   console.log("get");
   return res.send("GET films");
 });

 router.post("/films/:id", (req, res) => {
   //logica para crear peliculas
   const filmId = req.params.id;
   console.log("posted film " + filmId);
   console.log("post");
   return res.send("POST films");
 });
 
 router.put("/films/:id", (req, res) => {
   //logica para editar peliculas
   const filmId = req.params.id;
   console.log("updated film " + filmId);
   console.log("send");
   return res.send("UPDATE films");
 });
 
 router.delete("/films/:id", (req, res) => {
   //logica para borrar peliculas
   const filmId = req.params.id;
   console.log("deleted film " + filmId);
   console.log("delete");
   return res.send("DELETE films");
 });

export { router }