import {useState} from 'react'
import '../estilos/estilo.css'

function Botao(){

    const [frase, setFrase] = useState('')

    function abrir(){

        let mensagem = ['Não alimente os seus medos', 'Tenha paciência nas aflições',
        'Você consegue superar os obstáculos que a vida lhe impõe', 'Seja melhor que você mesmo a cada dia', 'Você é uma pessoa única e especial', 'Não desista de seus objetivos justos']

        let aleatorio = Math.floor(Math.random() * mensagem.length)

         setFrase('"' + mensagem[aleatorio] + '"')        

    }

    return(
        <div className='botaoContainer'>
            <p className='frase'>{frase}</p>
            <button className='botao' onClick={abrir}>Abrir Biscoito</button>
        </div>
    )
}

export default Botao;