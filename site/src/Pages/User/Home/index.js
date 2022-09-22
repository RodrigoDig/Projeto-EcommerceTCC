import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <main>        
            <Link to='/loginadm'>
                loginadm
            </Link>
        </main>
    )
}