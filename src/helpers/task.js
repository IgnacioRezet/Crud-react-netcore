export const getTask = async () => {
    const url = `http://tareaswebapi.somee.com/api/Tareas/Lista`;

    try {
        const resp = await fetch(url);        
        if (!resp.ok) {
            throw new Error(`HTTP error! Status: ${resp.status}`);
        }

        const result = await resp.json();
        const { response } = result;
        if (!response) {
            throw new Error('No se encontró el campo "response" en la respuesta.');
        }  
       
        const tareasResponse = response.map(tsk => ({
            id: tsk.id,
            title: tsk.titulo,
            description: tsk.descripcion,
            createDate:tsk.fechaCreacion,
            state:tsk.estado
        }));

        return tareasResponse;

    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}


export const saveTaskHelper = async (objetoTareas) => {
  
    const url = `http://tareaswebapi.somee.com/api/Tareas/Guardar`;
    const data = {
        "titulo": objetoTareas.title,
        "descripcion": objetoTareas.description,
        "fechaCreacion": new Date(objetoTareas.createDate),
        "estado": objetoTareas.state
    };

    try {
        const resp = await fetch(url, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(data)
        });

        if (!resp.ok) {
            throw new Error(`HTTP error! Status: ${resp.status}`);
        }

        const result = await resp.json();
      
        const { mensaje } = result;
        if (!mensaje) {
            throw new Error('No se encontró el campo "mensaje" en la respuesta.');
        }

        return mensaje;

    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

export const updateTaskHelper = async (objetoTareas) => {
    
     const url = `http://tareaswebapi.somee.com/api/Tareas/Editar`;
     const data = {
        "id": objetoTareas.id,
        "titulo": objetoTareas.title,
        "descripcion": objetoTareas.description,
        "fechaCreacion": new Date(objetoTareas.createDate),
        "estado": objetoTareas.state
      }
 
     try {
         const resp = await fetch(url, {
             method: 'PUT', 
             headers: {
                 'Content-Type': 'application/json' 
             },
             body: JSON.stringify(data)
         });
 
         if (!resp.ok) {
             throw new Error(`HTTP error! Status: ${resp.status}`);
         }
 
         const result = await resp.json();
         
         const { mensaje } = result;
         if (!mensaje) {
             throw new Error('No se encontró el campo "mensaje" en la respuesta.');
         }
 
         return mensaje;
 
     } catch (error) {
         console.error('Error fetching data:', error);
         return [];
     }
 };

 export const deleteTaskHelper = async (id) => {
    
    const url = `http://tareaswebapi.somee.com/api/Tareas/Eliminar/${id}?idTask=${id}`;

    try {
        const resp = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!resp.ok) {
            throw new Error(`HTTP error! Status: ${resp.status}`);
        }

        const result = await resp.json();

        const { mensaje } = result;
        if (!mensaje) {
            throw new Error('No se encontró el campo "mensaje" en la respuesta.');
        }

        return mensaje;

    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};


