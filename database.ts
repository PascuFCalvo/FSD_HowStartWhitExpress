import "reflect-metadata"

import { DataSource } from "typeorm"

// le metes el export en la misma linea directamente que seria lo mismo que poner: export { AppDataSource } al final

export const AppDataSource = new DataSource({
 type: "mysql",
 host: "localhost",
 port: 3306,
 username: "root",
 password: "karanas3689",
 database: "fsd-typeorm",
 entities: [],
 synchronize: false,
 logging: false,
})

