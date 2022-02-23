import logo from './assets/images/logo.svg';
import './assets/css/App.css';


//importar componentes
import MiPrimerComponent from './components/MiPrimerComponent';

function HolaEdwin (nombre, edad){
  var presentacion=  (
    <div>

          <h2>Hola soy {nombre}</h2>
          <h3> tengo {edad} años</h3>
    </div>
    );

  return presentacion;
}

function App() {
 var nombre= "EDWIN MAY";
 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HOLA BIENVENIDO A PRACTICAR CONMIGO.
        </p>
        {HolaEdwin(nombre, 15)}
        
           <section className="componentes">
       
           <MiPrimerComponent />
           
            </section>


      </header>
    </div>
  );
}

export default App;
