import { useEffect, useState } from 'react';
import { getTask, saveTaskHelper, updateTaskHelper, deleteTaskHelper } from '../helpers/task';

export const useFetchTask = () => {
 
    const [task, setTask] = useState([]);   
    const [msgSave, setMsgSave] = useState('');
    const [msgUpdate, setMsgUpdate] = useState('');
    const [msgDelete, setMsgDelete] = useState('');

    const getTareas = async() => {
        const newTareas = await getTask();
        setTask(newTareas);     
    }

    const saveTask = async (objetoTareas) => {       
        const saveMSG = await saveTaskHelper(objetoTareas);
        setMsgSave(saveMSG);
    }
    
    const updateTask= async (objetoTareas) => {       
        const updateMSG = await updateTaskHelper(objetoTareas);
        setMsgUpdate(updateMSG);
    }
    const deleteTask = async (id) => {
        const deleteMSG = await deleteTaskHelper(id);
        setMsgDelete(deleteMSG);
    }

    return {
        task,
        msgSave,
        msgUpdate,
        msgDelete,
        getTareas,
        saveTask,
        updateTask,
        deleteTask        
    }

}

