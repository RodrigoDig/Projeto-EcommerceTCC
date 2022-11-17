import './index.scss'
import React,{ useState } from 'react'

export default function CompFav() {
    const[favorito, setFavorito] = useState([]);

    return(
        <main>

            <section className='sct-2'>

                <div className='align-1'>
                    <div className='cont-1'>
                       <h1 className='txt-1'> Favoritos</h1>
                       <div className='ghost'></div>
                       <div>
                       </div>
                    </div>
                </div>    

            </section>

        </main>
    )
}