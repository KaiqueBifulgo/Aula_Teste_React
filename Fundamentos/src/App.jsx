import "./App.css"

// IMPORTANDO UM COMPONENTE
import FirstComponent from './components/FirstComponent';

// TEMPLETE EXPRESSION
import TempleteExpression from "./components/TempleteExpression";

// HIERARQUIA
import Repeat from "./components/Repeat";

// EVENTOS DE CLIQUE
import Events from "./components/Events";

function App() {
 
  return ( 
  <div className="App">
    {/* COMENTARIO EM JSX */}
    <h1>Fundamentos do react !</h1>
    <FirstComponent />
    <TempleteExpression />
    <Repeat />
    <Events />
  </div>
  
  )
}

export default App
