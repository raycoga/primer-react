import React, { memo, useState, useEffect } from 'react';
import './MiPrimerComponent.css'
const initialState = {
    nombre: '',
    ingredientes: [''],
    calorias: 0
}
const MiPrimerComponent = memo(() => {
    const [receta, setReceta] = useState(initialState);
    const [nombreReceta, setNombreReceta] = useState(receta.nombre);

    useEffect(() => {
        console.log('antes de renderizar')
        const query = {
            nombre: 'Pizza',
            ingredientes: ['tomate', 'queso', 'jamon cocido'],
            calorias: 400
        }
        setReceta(query)
    }, []);

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
                <button type='submit'>Cambiar</button>
            </form>
            {RecetaT}
            {caloriasT}
            {ingredientes}
            <hr />
        </div>
    );
});

export default MiPrimerComponent;


