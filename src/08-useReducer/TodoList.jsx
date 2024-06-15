
import { ToDoItem } from './ToDoItem'

export const TodoList = ({todos = [], onRemoveTodo, onToggleTodo }) => {



    return (
        <ul className='list-group'>
            {
                todos.map(todo => (
                    <ToDoItem 
                        key={ todo.id } 
                        todo= { todo } 
                        onRemoveTodo={ onRemoveTodo }
                        onToggleTodo = { onToggleTodo }
                    />
                ))
            } 
        </ul> 
    )
}
