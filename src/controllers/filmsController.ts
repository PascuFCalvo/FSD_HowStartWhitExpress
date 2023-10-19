//aqui ira la logica de cada direccion de routes
import { Request, Response } from "express";

const getAllFilms = (req:Request, res:Response) => {
   //logica de lo que quieras hacer/devolver
   console.log("get");
   return res.send("GET films");
 }

 export { getAllFilms }