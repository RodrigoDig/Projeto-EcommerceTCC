import { Router } from 'express';
import { loginUser } from "../repository/userLoginRepository.js";

const server = Router();

server.post('/user/userLogin', async (req, resp) => {
        try{

        const {user, email, senha} = req.body;
        const z = await loginUser(user, email, senha);
        if(!z){
                throw new Error('Credencias inválidas!');
        }

        resp.send(z);

        } catch(err){

         resp.status(401).send({
            err: err.message
         });   
        }


})

export default server;