import 'dotenv/config';

import usuarioController from './controller/usuarioController.js';
import admLoginController from './controller/admLoginController.js';
import categoriaController from './controller/categoriaController.js';

import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());

server.use(admLoginController);
server.use(usuarioController);
server.use(categoriaController);


server.listen(process.env.PORT,
               () => console.log(`API conectada na porta ${process.env.PORT}`))