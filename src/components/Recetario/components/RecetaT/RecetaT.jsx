import React, { memo } from 'react';

const RecetaT = memo(({nombreReceta}) => {
    return <h1>{`Receta: ${nombreReceta}`}</h1>
});

export default RecetaT;

