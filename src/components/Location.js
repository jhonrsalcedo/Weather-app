import React from 'react';

/* se utiliza un parametro props, ademas se utiliza los {} para mas instrucciones 
pero se utiliza de esa manera para asegurar que todo salga bien ya sea con una sola linea de codigo
() */ 
const Location = ({city}) =>(
    <div>
        <h1>{city}</h1>
    </div>
    );
    /*console.log(props);
/*se crea un punto de interrupcion debugger; */

//Destructuring - Cuando tenemos una propiedad con un nombre lo queremos asignar con el mismo nombre que la propiedad la podemos hacer de forma directa
//const {city} = props; Destructuring
//const city = props.city; - forma normal 
//se puede simplificar aun mas desde const Location = ({city}) directamente y se elimina la linea const {city} = props; y se vuelve a utilizar las () en este caso, en caso contrario se utiliza las {}
    

export default Location;