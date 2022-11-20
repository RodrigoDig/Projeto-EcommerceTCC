import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

/*User*/

import Home from './Pages/User/Home';
import DepPage from './Pages/User/Departamentos';
import Atendimento from './Pages/User/Atendimentos';
import CadastroUser from './Pages/User/CadastroUser';
import Carrinho from './Pages/User/Carrinho'; 
import Configurações from './Pages/User/Configuracoes';
import EtapaCompraI from './Pages/User/EtapaCompraI';
import EtapaCompraII from './Pages/User/EtapaCompraII';
import EtapaCompraIII from './Pages/User/EtapaCompraIII';
import EtapaCompraIV from './Pages/User/EtapaCompraIV'
import Favoritos from './Pages/User/Favoritos';
import Login from './Pages/User/LoginI';
import Perfil from './Pages/User/Perfil';
import Produto from './Pages/User/Produto';
import Status from './Pages/User/Status';

/*ADM*/

import CstEstoque from './Pages/Admin/ConsultarProdutos';
import CstPedidos from './Pages/Admin/ConsultarPedidos';
import LoginAdm from './Pages/Admin/LoginAdm';
import Cadastro from './Pages/Admin/CadastroProduto';
import Alterar from './Pages/Admin/AlterarProduto';
import Cupom from './Pages/Admin/cadastroCupom';
import ConsultarCupom from './Pages/Admin/ConsultarCupom';

export default function Index(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/departamentos/:id" element={<DepPage/>} />
                <Route path="/atendimento" element={<Atendimento />} />
                <Route path="/cadastrouser" element={<CadastroUser />} />
                <Route path="/alteraruser/:idParam" element={<CadastroUser />} />
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="/configuracoes" element={<Configurações />} />
                <Route path="/etapaI" element={<EtapaCompraI />} />
                <Route path="/etapaII" element={<EtapaCompraII />} />
                <Route path="/etapa3" element={<EtapaCompraIII />} />
                <Route path="/etapaIV" element={<EtapaCompraIV />} />
                <Route path="/favoritos" element={<Favoritos />} />
                <Route path="/login" element={<Login />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/compra/produto/:id" element={<Produto />} />
                <Route path="/status" element={<Status />} />
                
                <Route path="/alterarproduto" element={<Alterar />} />
                <Route path="/estoque" element={<CstEstoque />} />
                <Route path="/pedidos" element={<CstPedidos/>}/>
                <Route path="/loginadm" element={<LoginAdm />} />
                <Route path="/cadastroproduto" element={<Cadastro />} />
                <Route path="/cupom" element={<Cupom/>} />
                <Route path="/alterar/:idParam" element={<Cupom/>} />
                <Route path="/consulta/cupom" element={<ConsultarCupom/>} />
            </Routes>
        </BrowserRouter>
    )
}