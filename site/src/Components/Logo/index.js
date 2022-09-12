import './index.scss';

export default function Logo(){
    return(
        <main>
            <section className="background-logo">
                <div className="espacamento-logo">
                    <h1>Byte</h1>
                    <img alt='' src='/images/rocket.png'/>
                    <h1>Speed</h1>
                </div>
                <hr/>
            </section>
        </main>
    )
}