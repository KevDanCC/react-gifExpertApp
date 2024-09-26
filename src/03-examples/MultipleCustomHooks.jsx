import { useEffect, useState } from "react";
import { useCounter, useFetch } from "../hooks"
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {

    const { counter, decrement, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    return (
        <>
            <h1>Informacion de Pokemons</h1>

            <hr />
            {
                isLoading
                    ? <LoadingMessage />
                    : (
                        <PokemonCard
                            name={data?.name}
                            id={data?.id}
                            sprites={[
                                data.sprites.front_default,
                                data.sprites.front_shiny,
                                data.sprites.back_default,
                                data.sprites.back_shiny
                            ]}
                        />
                    )
            }


            {/* <pre>{JSON.stringify(data?.name, null, 2)}</pre>
            <pre>{JSON.stringify(data?.id, null, 2)}</pre> */}
            <button

                onClick={() => counter > 1 ? decrement() : null}
                className="btn btn-primary mt-2">Anteriores</button>

            <button

                onClick={() => increment()}
                className="btn btn-primary mt-2">Siguiente</button>
        </>
    )
}
