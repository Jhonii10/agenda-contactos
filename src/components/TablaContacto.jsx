import React from 'react';

const TablaContacto = ({contactos = [], dispatch}) => {

   const handleDelete = (id)=>{
    const deleteAction = {
        type:'delete',
        payload: id,
    }

    dispatch(deleteAction)
   }

   console.log(handleDelete)

    return (
        <table className='table'>
            <thead>
                <tr>
                <th>id</th>
                <th>nombre</th>
                <th>numero </th>
                <th>accion</th>
                </tr>
                {
                    contactos.map((contacto)=>{

                        const finalId = contacto.id.toString().split("-");
                        console.log(finalId)
                        return <tr key={contacto.id}>
                        <th>{finalId[0]}</th>
                        <td>{contacto.nombre}</td>
                        <td>{contacto.numero}</td>
                        <td>
                            <button onClick={()=>handleDelete(contacto.id)} className='btn btn-danger'>Eliminar</button>
                        </td>

                        </tr>
                    })
                }
            </thead>

        </table>
    );
}

export default TablaContacto;
