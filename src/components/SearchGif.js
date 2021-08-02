import React, {useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export function SearchGif({setcategorias}) {
    const [inputCategoryText, setinputCategoryText] = useState('')

    useEffect(()=>{
        getGifs();
    },[])

    const handleSearch = (e)=>{
        e.preventDefault();
        if(inputCategoryText === '') return;
        getGifs(inputCategoryText).then(imgs => {
            setcategorias(imgs);
        });
        setinputCategoryText('');
    }

    const onInputAddCategoryChange = (e) =>{
        setinputCategoryText(e.target.value);
    }
    return (
        <form onSubmit={handleSearch}>
            <input type="text" value={inputCategoryText} onChange={onInputAddCategoryChange}/>
            <input type="submit" value="Buscar" />
        </form>
    )
}
