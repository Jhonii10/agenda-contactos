import React, { useEffect, useReducer, useState } from 'react';
import { ContactosReducer } from '../reducers/ContactosReducer';
import FormularioAdd from './FormularioAdd';
import TablaContacto from './TablaContacto';

const contactos = [];
const init = () =>{ 
    const infoContactos = localStorage.getItem('infoContactos')
    return infoContactos ? JSON.parse(infoContactos) : [];
}

const Contacto = () => {



      const [state,dispatch] = useReducer(ContactosReducer,contactos,init)

      useEffect(() => {
        localStorage.setItem('contactos',JSON.stringify(state))
      }, [state]);


      const [formView, setformView] = useState(false);

    return (
        <div className='container mt-3'>

            <button onClick={()=>setformView(!formView)} className='btn btn-primary'>
             {
                !formView ? 'Agregar Contacto':'Cerrar Formulario'
             }
            </button>
            
             {
                formView && <FormularioAdd dispatch={dispatch}/> 
             }
            
            <TablaContacto contactos={state} dispatch={dispatch}/>
        </div>
    );
}

export default Contacto;
