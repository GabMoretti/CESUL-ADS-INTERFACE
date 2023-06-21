import { Children, createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

    const [listarTarefas, setListartarefas] = useState([])

    function cadastrarTarefa(tarefa) {

        setListartarefas([tarefa, ...listarTarefas])

    }

    return <TaskContext.Provider value={({listarTarefas, cadastrarTarefa})}>{children}</TaskContext.Provider>
}