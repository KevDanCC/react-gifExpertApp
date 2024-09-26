import { useEffect, useState } from "react"
import { Message } from "./Message";
import { useForms } from "../hooks/useForms";

export const SimpleFormWithCustomHook = () => {


    const { formState, onInputChange, onResetForm } = useForms({

        username: '',
        email: '',
        password: ''

    })


    const {
        username,
        email,
        password } = formState

    return (
        <>
            <h1>Formario con Custom Hook</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}

            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="email"
                name="email"
                value={email}
                onChange={onInputChange}

            />
            <input
                type="password"
                className="form-control mt-2"
                placeholder="password"
                name="password"
                value={password}
                onChange={onInputChange}

            />

            {
                (username == 'tester' && <Message />)

            }


            <button
                className="btn btn-primary mt-2"
                onClick={onResetForm}
            >
                Borrar
            </button>


        </>
    )
}
