import Botao from './components/Botao';
import './estilos/estilo.css'

function App(){
  return(
    <div className='container'>
      <h1 className='titulo'>Biscoito da Sorte</h1>
      <img className='imagem' src={require('./assets/biscoito.png')} alt="biscoito chinês" />
      <Botao />
    </div>
  )
}

export default App;