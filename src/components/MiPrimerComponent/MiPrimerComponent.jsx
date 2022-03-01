import React, { memo, useState, useEffect } from 'react';
import './MiPrimerComponent.css'
const initialState = {
    nombre: '',
    ingredientes: [''],
    calorias: '',
}
const MiPrimerComponent = memo(() => {
    const [receta, setReceta] = useState(initialState);
    const [nombreReceta, setNombreReceta] = useState(receta.receta);

    const [Calorias, setCalorias] = useState(initialState);
    const [nombreCalorias, setNombreCalorias] = useState(Calorias.calorias);

    const [Nombre, setNombre] = useState(initialState);
    const [nombreNombre, setNombreNombre] = useState(Nombre.nombre);

 //       useEffect(() => {
 //       console.log('antes de renderizar')
 //       const query = {
 //           nombre: '',
 //           ingredientes: ['tomate', 'queso', 'jamon cocido'],
 //           calorias: ''
 //       }
 //       setReceta(query)
 //   }, []);

    useEffect(() => {
        if (receta.nombre !== '') {
            console.log('despues de obtener receta')
            setNombreReceta(receta.nombre)
        }
    }, [receta]);

    useEffect(() => {
      return () => {
            setReceta(initialState) 
        }
    }, []);

    const RecetaT = <h1>{`Receta: ${receta.nombre}`}</h1>
    const caloriasT = <h2>{`Calorias: ${receta.calorias}`}</h2>
    const NombreT = <h3>{`Nombre: ${receta.ingredientes}`}</h3>

   const ingredientes = <ol>
  {receta.ingredientes.map((ingredientes, i) => <li key={i}>{ingredientes}</li>)}  
    </ol>


    const onSubmit = e => {
        e.preventDefault()
        let data = { ...receta }
        data.nombre = nombreReceta
        setReceta(data)    
    }

    return (
        <div className="mi-componente">
            
            <form onSubmit={onSubmit}>
                <input value={nombreReceta} onChange={event => setNombreReceta(event.target.value)} />
                <button type='submit'>Cambiar Receta</button>
            </form>

            <form onSubmit={onSubmit}>
                <input value={nombreCalorias} onChange={event => setNombreCalorias(event.target.value)} />
                <button type='submit'>Cambiar Calorias</button>
            </form>
            
            <form onSubmit={onSubmit}>
                <input value={nombreNombre} onChange={event => setNombreNombre(event.target.value)} />
                <button type='submit'>Cambiar Nombre</button>
            </form>

            {RecetaT}
            {caloriasT}
            {NombreT}
            
            <hr />
        </div>
    );
});

export default MiPrimerComponent;