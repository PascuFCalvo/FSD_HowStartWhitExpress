"use strict";
// crear un servidor de express
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importar express
const express_1 = __importDefault(require("express"));
//ejecutar express y guardalo en la constante app
const app = (0, express_1.default)();
//habilita un puerto donde lo dejas escuchando, primer parametro un puerto y como segundo la funcion callback
app.listen(4000, () => {
    console.log("Server running");
});
