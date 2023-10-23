import "reflect-metadata"
import { DataSource } from "typeorm"
import { Film1697789907147 } from "./src/migration/1697789907147-film"
import { Film } from "./src/models/Film"
import { CreateGenresTable1698047072723 } from "./src/migration/1698047072723-create-genres-table"
import { CreateFilmGenre1698048148620 } from "./src/migration/1698048148620-create-film_genre"


// le metes el export en la misma linea directamente que seria lo mismo que poner: export { AppDataSource } al final

export const AppDataSource = new DataSource({
 type: "mysql",
 host: "localhost",
 port: 3306,
 username: "root",
 password: "karanas3689",
 database: "fsd-typeorm",
 //añadimos las migraciones que tiene que lanzar
 migrations:[Film1697789907147, CreateGenresTable1698047072723, CreateFilmGenre1698048148620],
 entities: [Film],
 synchronize: false,
 logging: false,
})

