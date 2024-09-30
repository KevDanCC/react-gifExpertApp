import { useForms } from "../hooks/useForms"

export const TodoAdd = ({ handleNewTodo }) => {

    const { formState, onInputChange, onResetForm } = useForms(
        {
            description: ''
        })

    const { description } = formState;


    const onNewTodo = (event) => {
        event.preventDefault();
        if (description.length < 2) return
        handleNewTodo({
            id: new Date().getTime(),
            description: description,
            done: false,
        })
        onResetForm()

    }

    return (
        <>
            {/* TodoApp  onNewTodo(todo)*/}
            <form onSubmit={onNewTodo}>
                <input
                    type="text"
                    placeholder="Que hay que hacer?"
                    className="clas form-control"
                    onChange={onInputChange}
                    value={description}
                    name="description"
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1"
                >
                    Agregar
                </button>
            </form>
            {/* TodoApp */}



        </>


    )
}
