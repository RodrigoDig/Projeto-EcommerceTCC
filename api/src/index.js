import 'dotenv/config';

import usuarioController from './controller/usuarioController.js';
import admLoginController from './controller/admLoginController.js';
import categoriaController from './controller/categoriaController.js';
import departamentoController from './controller/departamentoController.js';
import produtoController from './controller/produtoController.js';
import cadastroUsuarioController from './controller/cadastroUsuarioController.js';
import userLoginController from './controller/userLoginController.js';
import CadastroEndController  from './controller/enderecoController.js';
import pedidoController from './controller/pedidoController.js';
import cupomController from './controller/cupomController.js';

import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());

server.use('/storage/imagensProduto', express.static('storage/imagensProduto'));

server.use(admLoginController);
server.use(usuarioController);
server.use(categoriaController);
server.use(departamentoController);
server.use(produtoController);
server.use(cadastroUsuarioController);
server.use(userLoginController);
server.use(CadastroEndController);
server.use(pedidoController);
server.use(cupomController);

server.use('/storage/ImagensProduto', express.static('storage/ImagensProduto'));

server.listen(process.env.PORT,
               () => console.log(`API conectada na porta ${process.env.PORT}`))