import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos = [], handleDeleteTodo, onToggleTodo }) => {
    return (
        <>
            <ul className="list-group">
                {todos.map((element) => (
                    <TodoItem
                        key={element?.id}
                        item={element}
                        handleDeleteTodo={handleDeleteTodo}
                        onToggleTodo={onToggleTodo} />
                ))}
            </ul>
        </>
    )
}
