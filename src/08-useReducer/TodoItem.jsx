
export const TodoItem = ({ item, handleDeleteTodo, onToggleTodo }) => {
    return (
        <>
            {/* // TodoItem */}
            < li className="list-group-item d-flex justify-content-between" >
                <span
                    onClick={() => onToggleTodo(item.id)}
                    className={`align-self-center ${(item.done) ? 'text-decoration-line-through' : ''}`}
                >
                    {item.description}
                </span>
                <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteTodo(item.id)}
                >Borrar</button>
            </li >
        </>

    )
}
