import { useEffect } from "react"

export const PokemonCard = ({ id, name, sprites = [] }) => {


    return (
        <section
            style={{ height: 200 }}
        >
            <h2
                className="text-capitalize"
            >
                {`# ${id} - ${name} `}
            </h2>


            {/* Imagenes */}
            <div>
                {
                    sprites.map((img) => {
                      return    <img
                            key={img}
                            src={img}
                            alt={name}
                        />
                    })
                }
            </div>
        </section>
    )
}
