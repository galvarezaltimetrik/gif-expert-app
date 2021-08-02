import React from 'react'
import { CategoriaItem } from './CategoriaItem';

export function CategoriaList({categorias}) {

    return (
        <ul>
            { 
                categorias.map( categoria => {
                    return <CategoriaItem key={categoria.id} urlItem={categoria.url} titleItem={categoria.title}/>
                })
            }
        </ul>
    )
}
