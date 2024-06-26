import { useState } from "react"
import Tarea from "./Tarea"

const ListadoTareas = ({tareas, setTareasObjeto, setEliminarID, setDatosEliminar}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">Listado Tareas</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Admnistra tus {''}
        <span className="text-indigo-600 font-bold">Tareas</span>
      </p>
      <div className="md:h-screen overflow-y-scroll">
        {tareas.map((tarea) => (          
          <Tarea key={tarea.id} tarea={tarea} setTareasObjeto={setTareasObjeto} setEliminarID={setEliminarID} setDatosEliminar={setDatosEliminar} />
        ))}
       

      </div>
     
    </div>
  )
}

export default ListadoTareas
