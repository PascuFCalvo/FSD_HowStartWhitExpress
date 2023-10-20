//aqui ira la logica de cada direccion de routes
import { Request, Response } from "express";
import { Film } from "../models/Film";

const getAllFilms = async (req: Request, res: Response) => {
  try {
    const films = await Film.find();

    console.log("get");
    return res.send(films);
  } catch (error) {
    return res.send(error);
  }
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

const createAFilmById = async (req: Request, res: Response) => {
  try {
    let nuevaPelicula = req.body;
    await Film.create({
      title: req.body.title,
      director: req.body.director,
    }).save();

    return res.send(nuevaPelicula);
  } catch (error) {
    return res.send(error);
  }
};

const modifyAFilmById = (req: Request, res: Response) => {
  //logica para editar peliculas
  const filmId = req.params.id;
  console.log("updated film " + filmId);
  console.log("send");
  return res.send("UPDATE films");
};

const deleteAFilmById = async (req: Request, res: Response) => {
  //otro mas facil

  // Film.delete({
  //  id:parseInt(filmIdToDelete)
  // })
  //  va a devolver un 0 o un 1 si ha borrado o no , no puedes averiguar que has borrado
  //
  try {
    const filmIdToDelete = req.params.id;

    const filmToRemove = await Film.findOneBy({
      id: parseInt(filmIdToDelete),
    });

    let filmRemoved = await Film.remove(filmToRemove as Film); // hay que ponerle un as Film para que no chille typescript
    return res.send(filmRemoved);
  } catch (error) {
    return res.send(error);
  }
};

export {
  getAllFilms,
  createAFilmById,
  getAFilmById,
  modifyAFilmById,
  deleteAFilmById,
};
