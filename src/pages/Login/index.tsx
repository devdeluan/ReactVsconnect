//estilização
import { useState } from "react";
import "./style.css";
import api from "../../utils/api";
import secureLocalStorage from 'react-secure-storage'
import { useNavigate } from "react-router-dom"; // força uma navegaçao programatica


function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState<string>('')
    const [senha, setSenha] = useState<string>('')

function fazerLogin (event:any) {
    event.preventDefault()

    const usuario: object = {
        email: email,
        password: senha
    }
// post envia 
// response resposta da api
// promisse um dos tipos de funçao assincrona nao fica esperando a resposta
    api.post('login', usuario).then((response) => {
        console.log(response)


        // salvar no local storage
        // localStorage.setItem('user', response.data) 

        //npm i react-secure-storage extensao para salvar no localstorage
        secureLocalStorage.setItem('user', response.data)
        navigate('/perfil/' + response.data.user.id)
        
        // Recarrega a pagina e resgate no local storage o usuario logado
        navigate(0)
    })
    
}

    return (
        <main id="main_login">
            <div className="container container_login">
                <div className="login_conteudo">
                    <h1>Login</h1>
                    <hr />
                    <form onSubmit={ fazerLogin } className="login_formulario" method="POST">
                        <div className="login_box_input">
                            <label htmlFor="email">E-mail:</label>
                            <input
                                type="email"
                                id="email"
                                onChange={ (event) => { setEmail(event.target.value) } } // pega o valor digitado e coloca como um valor
                                placeholder="Digite aqui seu e-mail:"
                                required
                            />
                        </div>
                        <div className="login_box_input">
                            <label htmlFor="senha">Senha:</label>
                            <input
                                type="password"
                                id="senha"
                                onChange={ (event) => { setSenha(event.target.value) } } // pega o valor digitado e coloca como um valor
                                placeholder="Digite aqui sua senha:"
                                required
                            />
                        </div>
                        <button className="login_botao" type="submit">Logar</button>
                    </form>
                </div>
            </div>
        </main>

    );
}

export default Login;