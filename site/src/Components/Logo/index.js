import './index.scss';

import FogueteIcon from '../../assets/images/Foguete-logo-branco.svg';

export default function Logo(){
    return(
        <main>
            <section>
                <div className="espacamento-logo">
                    <h1>Byte</h1>
                    <img src={FogueteIcon} className='foguete-icon-logo'/>
                    <h1>Speed</h1>
                </div>
            </section>
        </main>
    )
}