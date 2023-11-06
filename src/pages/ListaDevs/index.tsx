import { useEffect, useState } from "react"
import Card from "../../components/CardDev"
import "./style.css"
import api from "../../utils/api"

export default function ListaDevs(){

const[devs, setDevs] = useState<any[]>([

])

const[skillDigitada, setSkillDigitada] = useState<string>("");

const[listaDevsFiltrados, setListaDevsFiltrados] = useState<any[]>(devs);

useEffect(() => {
    document.title = "Lista de Devs - VSConnect"
        
    listarDesenvolvedores()

},[])

function buscarPorSkill(event:any){
    event.preventDefault();

    const devsFiltrados = devs.filter((dev:any) => dev.hardSkills.includes(skillDigitada.toLocaleUpperCase()))

    if(devsFiltrados.length===0){
        alert("Nenhum DEV encontrado com esta SKILL")
    }
    else{
        setListaDevsFiltrados(devsFiltrados)
    }
}

function retornoDevsGeral(event:any){
    if(event.target.value === ""){
        setListaDevsFiltrados(devs)
    }
    setSkillDigitada(event.target.value)
}

function listarDesenvolvedores(){
    api.get("users").then((resposta: any) => {console.log(resposta.data);
        setDevs(resposta.data)
    })
}

    return (
        <>
        <main>
        <div className="container container_lista_devs">
            <div className="lista_devs_conteudo">
                <h2>Lista de Devs</h2>
                <hr/>
                <form method="post" onSubmit={buscarPorSkill}>
                    <div className="wrapper_form">
                        <label htmlFor="busca">Procurar desenvolvedores</label>
                        <div className="campo-label">
                            <input type="search" name="campo-busca" id="busca" placeholder="Buscar desenvolvedores por tecnologias..." onChange={retornoDevsGeral}/>
                            <button type="submit">Buscar</button>
                        </div>
                    </div>
                </form>
                <div className="wrapper_lista">
                    <ul>
                        {
                        listaDevsFiltrados.length===0 ? 
                          devs.map((dev:any, index:number) => {
                            return <li key={index}>
                                <Card
                                id={dev.id}
                                foto={dev.user_img}
                                nome={dev.nome}
                                email={dev.email}
                                techs={dev.hardSkills}
                                />
                            </li>  
                          }) :  listaDevsFiltrados.map((dev:any, index:number) => {
                            return <li key={index}>
                                <Card
                                id={dev.id}
                                foto={dev.user_img}
                                nome={dev.nome}
                                email={dev.email}
                                techs={dev.hardSkills}
                                />
                            </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    </main>
        </>
    )
}