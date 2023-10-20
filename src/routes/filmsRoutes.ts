import { Router } from "express";
import {  createAFilmById,  deleteAFilmById,  getAFilmById, getAllFilms,  modifyAFilmById } from "../controllers/filmsController";

const router = Router();

//le hemos cambiado app x router porque ya no usamos app

router.get("/", getAllFilms);
router.get("/:id", getAFilmById);
router.post("/:id", createAFilmById);
router.put("/:id", modifyAFilmById);
router.delete("/:id",deleteAFilmById );

export { router };
