//aqui ira la logica de cada direccion de routes
import { Request, Response } from "express";

const getAllFilms = (req: Request, res: Response) => {
  //logica de lo que quieras hacer/devolver
  console.log("get");
  return res.send("GET films");
};

const getAFilm = (req:Request, res:Response) => {
   //logica de lo que quieras hacer/devolver
   //como pintar en consola el parametro que hemos metido en la ruta despues de films/ (en la consulta en el thunderclient)
   console.log(req.params);
   //como es un objeto podemos acceder a su id
   //como ya sabemos como recuperar , lo guardamos en una constante
   const filmsId = req.params.id;
   console.log(filmsId);
   console.log("get");
   return res.send("GET films");
 }

const createAFilm = (req: Request, res: Response) => {
  //logica para crear peliculas
  const filmId = req.params.id;
  console.log("posted film " + filmId);
  console.log("post");
  return res.send("POST films");
};

const modifyAFilm = (req:Request, res:Response) => {
   //logica para editar peliculas
   const filmId = req.params.id;
   console.log("updated film " + filmId);
   console.log("send");
   return res.send("UPDATE films");
 }

 const deleteAFilm = (req:Request, res:Response) => {
   //logica para borrar peliculas
   const filmId = req.params.id;
   console.log("deleted film " + filmId);
   console.log("delete");
   return res.send("DELETE films");
 }

export { getAllFilms , createAFilm, getAFilm, modifyAFilm,deleteAFilm};
