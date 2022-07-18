import express, { Application, Request, Response } from 'express';

import "reflect-metadata";
import "./database/dataSource";
import { usersRouter } from './Routers/UsersRouter';
import { permisionsRouter } from './Routers/PermissionsRouter';
import { rolesRouter } from './Routers/RolesRouter';
import { errors } from 'celebrate';
import { buildingRouter } from './Routers/BuildingRouter';
import { productCategoryRouter } from './Routers/ProductCategoyRouter';
import { productRouter } from './Routers/ProductRouter';
import { inventoryRouter } from './Routers/InventoryRouter';

process.env.TZ = 'America/Sao_Paulo';
console.log(new Date().toString()); 

// import "./database";

const app: Application = express();
const port: number = 3000;


app.use(express.json());

app.use(usersRouter, permisionsRouter, rolesRouter, buildingRouter, productRouter, productCategoryRouter, inventoryRouter);

app.use(errors());

app.get('/', (req: Request, res: Response)=> {

    res.send('hello word');
});

app.listen(port, ()=> {
    console.log(`Sucesso ao Conectar na porta ${port}`);
})