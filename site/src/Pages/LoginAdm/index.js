import React from "react";
//import { Link } from "react-router-dom";
import './index.scss';


export default function LoginAdmin(){
    return(
        <main>
            <section>

                <div>
                    ...cabeçalho
                </div>
                <div>
                    <div>
                        <h1>Admin Login</h1>
                    </div>

                    <div>
                        <div>
                            <img/>
                            <h2>User</h2>
                        </div>

                        <div>
                            <input type="text" />
                        </div>
                    </div>

                    <div>
                        <div>
                            <img />
                            <h2>Senha</h2>
                        </div>
                        <label>Esqueceu sua senha?</label>
                        <div>
                            <input type="text" />
                        </div>
                    </div>

                    <div>
                        <button>Entrar</button>
                    </div>
                </div>
            </section>
        </main>
    )
}