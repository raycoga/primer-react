import React, { memo, useState, useEffect } from "react";
import "./Recetario.css";
import RecetaT from "./components/RecetaT/RecetaT";
const initialState = {
  nombre: "",
  ingredientes: [""],
  calorias: "",
};
const Recetario = memo(() => {
  const [receta, setReceta] = useState(initialState);
  const [nombreReceta, setNombreReceta] = useState(receta.receta);

  useEffect(() => {
    console.log("antes de renderizar");
    const query = {
      nombre: "",
      ingredientes: ["tomate", "queso", "jamon cocido"],
      calorias: "",
    };
    setReceta(query);
  }, []);

  useEffect(() => {
    if (receta.nombre !== "") {
      console.log("despues de obtener receta");
      setNombreReceta(receta.nombre);
    }
  }, [receta]);

  useEffect(() => {
    return () => {
      setReceta(initialState);
    };
  }, []);

  
  const caloriasT = <h2>{`Calorias: ${receta.calorias}`}</h2>;
  const NombreT = <h3>{`Nombre: ${receta.ingredientes}`}</h3>;

  const ingredientes = (
    <ol>
      {receta.ingredientes.map((ingredientes, i) => (
        <li key={i}>{ingredientes}</li>
      ))}
    </ol>
  );

  const onSubmit = (e) => {
    e.preventDefault();
    let data = { ...receta };
    data.nombre = nombreReceta;
    setReceta(data);
  };

  return (
    <div className="mi-componente">
      <form onSubmit={onSubmit}>
        <input
          value={nombreReceta}
          onChange={(event) => setNombreReceta(event.target.value)}
        />
        <button type="submit">Cambiar Receta</button>
      </form>

      <RecetaT nombreReceta={receta.nombre} />
      {caloriasT}
      {NombreT}
      {ingredientes}
      <hr />
    </div>
  );
});

export default Recetario;
