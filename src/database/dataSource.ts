import { DataSource } from "typeorm";
import 'dotenv/config'

const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.POSTGRESHOST,
    username: process.env.POSTGRESUSERNAME,
    password: process.env.POSTGRESPASSWORD,
    entities: [
        "./src/entities/*.ts"
    ],
    migrationsRun: true,
    migrations: ["./src/database/migrations/*.ts"],
    logging: true
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    });

export { AppDataSource };