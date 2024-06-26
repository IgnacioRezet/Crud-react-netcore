import Formulario from "./Formulario"
import ListadoTareas from "./ListadoTareas"
import Header from "./Header"
import React, { useEffect, useState } from 'react'
import { useFetchTask } from "./hooks/useFetchTask";



function App() {
  const { task, getTareas, deleteTask } = useFetchTask(); 
  const [tareas, setTareas] = useState(task ? task : []);
  const [tareaObjeto, setTareasObjeto] = useState({});
  const [datosUpdate, setDatosUpdate] = useState(false);
  const [datosSave, setDatosSave] = useState(false);
  const [datosEliminar, setDatosEliminar] = useState(false);
  const [eliminarID, setEliminarID] = useState('');  
  
  useEffect(()=>{
    if(eliminarID){
      deleteTask(eliminarID);      
    }
  },[eliminarID])

  useEffect(()=>{
    getTareas();
    setDatosUpdate(false);
    setDatosSave(false);
    setDatosEliminar(false);
  },[datosUpdate, datosSave, datosEliminar]);

  useEffect(()=>{
    if(task){
      setTareas(task);
    }
  },[task]);

 
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario tareas={tareas} setTareas={setTareas} tareaObjeto={tareaObjeto} setDatosUpdate={setDatosUpdate} setDatosSave={setDatosSave}/>
        <ListadoTareas tareas={tareas} setTareasObjeto={setTareasObjeto} setEliminarID={setEliminarID} setDatosEliminar={setDatosEliminar}/> 
      </div>
     
     
    </div>
  )
}

export default App
