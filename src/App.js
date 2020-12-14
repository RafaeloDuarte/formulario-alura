import './App.css';
import Formulario from './components/Fomulario'

function App() {
  return (
    <div className="App">
      <Formulario onSubmit={onsub} />
    </div>
  );
}

function onsub(dados) {
  console.log(dados)
  console.log('chamada de callback feita com sucesso')
}

export default App;
