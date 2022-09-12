import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Pages/Home';
import Departamentos from './Pages/Departamentos';

export default function Index(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/departamentos" element={<Departamentos />} />
            </Routes>
        </BrowserRouter>
    )
}