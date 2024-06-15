import { useTodo } from '../hooks/useTodo'
import { TodoList } from './TodoList'
import { ToDoAdd } from './ToDoAdd'



export const ToDoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleRemoveTodo, handleToggleTodo, handleNewTodo } = useTodo()

    return (
        <>
            <h1>To Do App ({ todosCount }), <small>pendientes: { pendingTodosCount }</small></h1>
            <hr />
            

            <div className="row">
                <div className="col-7">
                    <TodoList  
                        todos={ todos } 
                        onRemoveTodo = { handleRemoveTodo }
                        onToggleTodo = { handleToggleTodo }
                        
                    />
                </div>


                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <ToDoAdd onNewTodo={ handleNewTodo }/>
                </div>
            </div>

        </>
  )
}
