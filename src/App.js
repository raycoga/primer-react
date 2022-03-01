import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";
import Recetario from "./components/Recetario/Recetario";

function HolaEdwin(nombre, edad) {
  var presentacion = (
    <div>
      <h2>Hola soy {nombre}</h2>
      <h3> tengo {edad} años</h3>
    </div>
  );

  return presentacion;
}

function App() {
  var nombre = "Edwin May";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          En este programa usted podra insertar su Receta, Calorias y un Nombre.
        </p>
        {HolaEdwin(nombre, 24)}

        <section className="componentes">
          <Recetario />
        </section>
      </header>
    </div>
  );
}

export default App;
