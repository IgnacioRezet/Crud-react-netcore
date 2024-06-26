import correct from './assets/img/correct.png';
import incorrect from './assets/img/incorrect.png';

const Tarea = ({tarea, setTareasObjeto, setEliminarID, setDatosEliminar}) => {
  const handleEditar = () => {
   setTareasObjeto(tarea);   
  };
  const handleEliminar = (id) => {
    setEliminarID(id);
    setDatosEliminar(true);
  }
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 ">Título: {''}
          <span className="font-normal normal-case">{tarea.title}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 ">Descripción: {''}
          <span className="font-normal normal-case">{tarea.description}</span>
        </p>        
        <p className="font-bold mb-3 text-gray-700 ">Fecha de Creación: {''}
          <span className="font-normal normal-case">{new Date(tarea.createDate).toDateString()}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700  flex">Estado: {''}

         {tarea.state ? (
          <img className='px-5 w-20' src={correct} alt="correcto"></img>
         ):(
          <img src={incorrect} className='px-5 w-20' alt="incorrecto"></img>
         )} 
        </p>
        <div className='flex justify-between'>
        <input type="button" onClick={handleEditar} className="bg-yellow-600 w-20 p-3  text-white uppercase font-bold hover:bg-yellow-700 cursor-pointer transition-all" value="Editar" />
        <input type="button" onClick={()=>handleEliminar(tarea.id)} className="bg-red-600 w-30 p-3 text-white uppercase font-bold hover:bg-red-700 cursor-pointer transition-all" value="Eliminar" />
        </div>
       
      </div>
  )
}

export default Tarea
