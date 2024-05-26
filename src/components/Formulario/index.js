import Botao from '../Botao';
import Cadastro from '../CampoTexto'
import ListaSuspensa from '../istaSuspensa';
import './Formulario.css'

import { useState } from 'react';


const Formulario = (props) => {


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')



    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')


    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Cadastro 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Cadastro 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu Cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Cadastro 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens = {props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}

                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )


}

export default Formulario;