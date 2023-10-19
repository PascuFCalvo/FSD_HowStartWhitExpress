import { Router } from "express";
import { createAFilm, deleteAFilm, getAFilm, getAllFilms, modifyAFilm } from "../controllers/filmsController";

const router = Router();

//le hemos cambiado app x router porque ya no usamos app

router.get("/", getAllFilms);

router.get("/:id", getAFilm);

router.post("/:id", createAFilm);

router.put("/:id", modifyAFilm);

router.delete("/:id",deleteAFilm );

export { router };
