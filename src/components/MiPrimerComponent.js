import React, {Component} from 'react';

class MiPrimerComponent extends Component{

 render(){
     let receta={
        nombre:'pizza',
        ingredientes: ['tomate', 'queso', 'jamon cocido'],
        calorias: 400 

     }
     




          return (

              <div className="mi-componente">
             <h1>{'receta:' +receta.nombre}</h1>
             <h2>{'calorias:' + receta.calorias}</h2>
             <ol>
             {
                 receta.ingredientes.map((ingredientes, i) =>{
                     console.log(ingredientes);
                     return (
                         <li key={i}>

                             {ingredientes}
                         </li>
                     );


                 })
             }
             </ol>


             <hr/>   
             </div>
          
          )
    }

}

export default MiPrimerComponent;