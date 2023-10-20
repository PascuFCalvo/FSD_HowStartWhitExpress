//aqui ira la logica de cada direccion de routes
import { Request, Response } from "express";

const getAllFilms = (req: Request, res: Response) => {
  //logica de lo que quieras hacer/devolver
  console.log("get");
  return res.send("GET films");
};

const getAFilmById = (req: Request, res: Response) => {
  //logica de lo que quieras hacer/devolver
  //como pintar en consola el parametro que hemos metido en la ruta despues de films/ (en la consulta en el thunderclient)
  console.log(req.params);
  //como es un objeto podemos acceder a su id
  //como ya sabemos como recuperar , lo guardamos en una constante
  const filmsId = req.params.id;
  console.log(filmsId);
  console.log("get");
  return res.send("GET films");
};

const createAFilmById = (req: Request, res: Response) => {
  let id = req.params.id
  let pelicula = req.body;
  //logica para crear peliculas
  
  console.log(pelicula)
  return res.send(`posted fim in id ${id}`);
};

const modifyAFilmById = (req: Request, res: Response) => {
  //logica para editar peliculas
  const filmId = req.params.id;
  console.log("updated film " + filmId);
  console.log("send");
  return res.send("UPDATE films");
};

const deleteAFilmById = (req: Request, res: Response) => {
  //logica para borrar peliculas
  const filmId = req.params.id;
  console.log("deleted film " + filmId);
  console.log("delete");
  return res.send("DELETE films");
};

export {
  getAllFilms,
  createAFilmById,
  getAFilmById,
  modifyAFilmById,
  deleteAFilmById,
};
