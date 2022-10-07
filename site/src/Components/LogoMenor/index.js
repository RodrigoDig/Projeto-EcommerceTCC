import './index.scss';
import FogueteIcon from '../../assets/images/Foguete-logo-branco.svg';

export default function LogoMenor(){
    return(
        <main className='cont-main-logom'>
            <div className="espacamento-logo">
                    <h1 className='txt-logom'>Byte</h1>
                    <img alt='' src={FogueteIcon} className='foguete-icon-logoM'/>
                    <h1 className='txt-logom'>Speed</h1>
                </div>
        </main>
    )
}