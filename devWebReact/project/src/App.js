import './App.css';
//import MeusDados from './components/atividades/Atividade00/MeusDados';
//import MyProps from './components/internalFunctions/MyProps';
//import Calculadora from './components/internalFunctions/Calc';
//import InternalFunctions from './components/internalFunctions/InternalFunctions';
import MeusDadosProps from './components/atividades/Atividade00/MeusDadosProps';
function App() {
  return (
    <div className="App">
      <MeusDadosProps
        nome="Guilherme Augusto"
        curso="Ciência Da Computação"
        universidade="Universidade Federal Do Ceará"
      />
      {
        /*
        <MeusDados/>
        <InternalFunctions/>
  
        <Calculadora/>
  
        <MyProps
          primeiraprops=" PROOOPS ! ! ! USANDO PROPS AQUI"
          segundaprops=" E DA PRA USAR MAIS DE UMA, INCRIVEL"
          terceiraprops=" NOSSA NA VERDADE CABE A QUANTIDADE QUE VOCE QUISER"
          numeroprops = {12}
        />
        */
      }
    </div>
  )
}

export default App;