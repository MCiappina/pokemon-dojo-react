import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'

type ModalProps = {
    pokemon: string
}

export const Modal: FC<ModalProps> = ({ pokemon }) => {
    const [pokemonData, setPokemonData] = useState<any>({})
    const [isLoading, setIsLoading] = useState<boolean>(false);
    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(response => {
            setPokemonData(response.data)
            setIsLoading(false)
        }).catch(err => console.error)
    }, [])

    return <div>

        {Boolean(Object.keys(pokemonData).length) && !isLoading && <img src={pokemonData.sprites.front_default} alt="bulbasauro" />}
    </div>

}
