import React, { useState } from 'react';
import {v4 as uuid} from 'uuid'

const FormularioAdd = ({dispatch}) => {

   const [data, setdata] = useState({nombre:"",numero:""});

   const { nombre, numero } = data;
   
   const handleChange = (e) => {
    setdata({
        ...data,[e.target.name]:e.target.value
    })
   }

    const actionAdd = {
        type: "add",
        payload:{
            id: uuid([]),
            nombre:nombre,
            numero:numero
        }
    }



    const handleAdd = () =>{
        dispatch(actionAdd);
        //console.log('me presionaron')
    }


    return (
        <>
        <div className='container'>
         <label className='mx-1 d-grid gap-2'>
         Nombre:{''}
         <input name="nombre" type={'text'} value={nombre} onChange={handleChange} className='form-control' autoComplete='off'></input>
         </label>

         <label className='mx-1 d-grid gap-2'>
         Numero:{''}
         <input name="numero"type={'text'} value={numero} onChange={handleChange} className='form-control' autoComplete='off'></input>
         </label>

         <div className='mx-1 d-grid gap-2'>
            <button className='btn btn-info mt-4' onClick={handleAdd}>Agregar contacto</button>
         </div>
            
        </div>
        </>
    );
}

export default FormularioAdd;
