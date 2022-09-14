import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Pages/Home';
import Departamentos from './Pages/Departamentos';
import Atendimento from './Pages/Atendimentos';
import CadastroEnd from './Pages/CadastroEndereco';
import CadastroUser from './Pages/CadastroUser';
import Carrinho from './Pages/Carrinho';
import Configurações from './Pages/Configuracoes';
import EtapaCompraI from './Pages/EtapaCompraI';
import EtapaCompraII from './Pages/EtapaCompraII';
import EtapaCompraIII from './Pages/EtapaCompraIII';
import EtapaCompraIV from './Pages/EtapaCompraIV';
import Favoritos from './Pages/Favoritos';
import Login from './Pages/LoginI';
import LoginII from './Pages/LoginII';
import LoginIII from './Pages/LoginIII';
import LoginIV from './Pages/LoginIV';
import Pedido from './Pages/Pedido';
import Perfil from './Pages/Perfil';
import Produto from './Pages/Produto';

import LoginAdmin from './Pages/LoginAdm';

export default function Index(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path='/departamentos' element={<Departamentos/>} />
                <Route path="/atendimento" element={<Atendimento />} />
                <Route path="/cadastroendereço" element={<CadastroEnd />} />
                <Route path="/cadastrouser" element={<CadastroUser />} />
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="/configuraçoes" element={<Configurações />} />
                <Route path="/etapaI" element={<EtapaCompraI />} />
                <Route path="/etapaII" element={<EtapaCompraII />} />
                <Route path="/etapaIII" element={<EtapaCompraIII />} />
                <Route path="/etapaIV" element={<EtapaCompraIV />} />
                <Route path="/favoritos" element={<Favoritos />} />
                <Route path="/login" element={<Login />} />
                <Route path="/loginII" element={<LoginII />} />
                <Route path="/loginIII" element={<LoginIII />} />
                <Route path="/loginIV" element={<LoginIV />} />
                <Route path="/pedido" element={<Pedido />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/produto" element={<Produto />} />

                <Route path="/loginadm" element={<LoginAdmin />} />
            </Routes>
        </BrowserRouter>
    )
}