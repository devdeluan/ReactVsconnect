//rotas
import { Link, useParams } from "react-router-dom";


//hooks
import { useState, useEffect } from "react";

//estilização
import "./style.css";

import api from "../../utils/api";



function VisualizarServico() {

    const { idServico } = useParams()

    const [nome, setNome ] = useState <string>('')
    const [valor, setValor ] = useState <string>('')
    const [descricao, setDescricao ] = useState <string>('')
    const [listaTech, setlistaTech ] = useState <string[]>([])

    useEffect(() => {
        document.title = 'Perfil de ' + nome + ' - VsConnect'

        buscarServicoPorId
 
    }, [])

    function buscarServicoPorId() {

        api.get('servico/'+ idServico).then((response: any) => {
            setNome(response.data.nome)
            setValor(response.data.valor)
            setDescricao (response.data.descricao)
            setlistaTech (response.data.listaTech)

        }).catch((error) => {
            console.log(error)
        })
    }
    



    return (
        <main id="main_visualizarservico">
            <div className="container">
                <h1>Serviço</h1>
                <div className="servico">
                    <div className="topo_servico">
                        <h2> { nome }</h2>
                        <span>{ valor }</span>
                    </div>
                    <p>{ descricao}</p>
                    <div className="techs">
                    {
                              listaTech.map((skill: any, index: number) => {
                                return <span key={ index }>{skill}</span>
                              })
                            }
                            
                    </div>
                </div>
            </div>

        </main>
        );
}

export default VisualizarServico;