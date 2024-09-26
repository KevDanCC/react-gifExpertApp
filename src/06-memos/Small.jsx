
import { memo } from 'react'

export const Small = memo(({ value }) => {

    console.log("Volviendo a diubujar")
    return (
        <small> {value}</small>)
})
