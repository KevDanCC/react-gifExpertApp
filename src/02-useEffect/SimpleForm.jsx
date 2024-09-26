import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'tester',
        email: 'kevin@algo.com'
    });


    useEffect(() => {
        // console.log("MONTADO!")
    }, []);

    useEffect(() => {
        // console.log("Form State CHANGED!!")
    }, [formState]);

    useEffect(() => {

        return () => {

        };
    }, []);




    const { username, email } = formState

    const onInputChange = ({ target }) => {
        const { value, name } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }



    return (
        <>
            <h1>Formario SImple</h1>
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

            {
                (username == 'tester' && <Message />)

            }


        </>
    )
}
