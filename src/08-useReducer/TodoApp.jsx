import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodo } from "../hooks"



export const TodoApp = () => {

    const {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        onToggleTodo,
        todosCount,
        pendingTodosCounter
    } = useTodo();

    return (
        <>
            <h1>TodoAp: {todosCount()} <small>Pendientes: {pendingTodosCounter()}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {/* TodoList */}
                    <TodoList
                        todos={todos}
                        handleDeleteTodo={handleDeleteTodo}
                        onToggleTodo={onToggleTodo}
                    />
                    {/* TodoList */}

                </div>
                <div className="col-5">

                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd handleNewTodo={handleNewTodo} />

                </div>
            </div >
        </>
    )
}
