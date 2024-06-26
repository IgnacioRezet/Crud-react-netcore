import React, { useEffect } from "react";
import Error from "./Error";
import { useFetchTask } from "./hooks/useFetchTask";

const Formulario = ({ tareas, setTareas, tareaObjeto, setDatosUpdate, setDatosSave }) => {

  const [ide, setIde]=React.useState(0);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [createDate, setCreateDate] = React.useState("");
  const [state, setState] = React.useState("");
  const [error, setError] = React.useState(false);
  const [estadoAccion, setEstadoAccion]=React.useState(false);
  
  const { saveTask, updateTask} = useFetchTask();



  useEffect(()=>{
    if(Object.keys(tareaObjeto).length > 0 ){      
        setIde(tareaObjeto.id); 
        setTitle(tareaObjeto.title);
        setDescription(tareaObjeto.description);
        setCreateDate(tareaObjeto.createDate);
        setState(tareaObjeto.state);
        setEstadoAccion(true);
    }
  },[tareaObjeto]);



  const getCurrentDate = (fecha) => {
    const today = new Date(fecha);
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    // Asegurarse de que el mes y el día tengan dos dígitos
    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }

    return `${year}-${month}-${day}`;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([titulo, descripcion, fecha].includes('')) {
      setError(true);
      return;
    }
    setError(false); 

    if(estadoAccion){
        const objetoTareaUP={id: ide, title,description,createDate,state};
        await updateTask(objetoTareaUP);
        setDatosUpdate(true);
        
    }else{
        const objetoTarea = { title, description, createDate, state };  
        await saveTask(objetoTarea);
        setDatosSave(true)
    }   
    
    setTitle('');
    setDescription('');
    setCreateDate('');
    setState(false);
    setEstadoAccion(false);
    
   
  };

  return (
    <>
        <div className="md:w-1/2 lg:w-2/4 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento Tareas</h2>
        <p className="text-lg mt-5 text-center mb-10">
            Añade Tareas y {''}
            <span className="text-indigo-600 font-bold">Administralas</span>
        </p>
        <form className="bg-white shadow-md rounded-lg py-10 px-5 ml-5 mb-10" onSubmit={handleSubmit}>
            {error ? <Error mensaje='Todos los campos son obligatorios' /> : null}
            <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="titulo">Título</label>
            <input id="titulo" type="hidden" placeholder="id" value={ide} />
            <input id="titulo" type="text" placeholder="Nombre de la tarea"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="descripcion">Descripción</label>
            <input id="descripcion" type="text" placeholder="Descripción de la tarea"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="fecha">Fecha</label>
            <input id="fecha" type="date" placeholder="Fecha de la tarea"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={getCurrentDate(createDate)} onChange={(e) => setCreateDate(e.target.value)} />
            </div>
            <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="estado">Estado</label>
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input type="checkbox" name="toggle" id="toggle" checked={state} onChange={() => setState(!state)} className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
            </div>
            <span>{state ? "Activa" : "Inactiva"}</span>
            </div>
            {estadoAccion ? (
                <input type="submit" className="bg-yellow-600 w-full p-3 text-white uppercase font-bold hover:bg-yellow-700 cursor-pointer transition-all" value="Editar Tarea" />
            ):(
                <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value="Agregar Tarea" />
            )}
            
        </form>
        </div>
        <style jsx>{`        
            .toggle-checkbox:checked {
            left: 15px;
            border-color: #4f46e5; /* Indigo-600 */
            }
            .toggle-checkbox:checked + .toggle-label {
            background-color: #4f46e5; /* Indigo-600 */
            }

            .toggle-checkbox {
            right: 15px;
            transition: right 0.2s ease-in-out;
            }

            .toggle-label {
            background-color: #d1d5db; /* Gray-300 */
            display: block;
            overflow: hidden;
            cursor: pointer;
            }`
        }</style>
    </>
    
  );
}

export default Formulario;
