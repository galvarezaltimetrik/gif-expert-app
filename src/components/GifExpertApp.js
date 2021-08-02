import React, { useState } from 'react'
import { SearchGif } from './SearchGif';
import { CategoriaList } from './CategoriaList';


export default function GifExpertApp() {
    const [categorias, setcategorias] = useState([]);
    
   
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <SearchGif setcategorias={setcategorias}/>
            <CategoriaList categorias={categorias}/>
        </>
    )
}
