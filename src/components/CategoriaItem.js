import React from 'react'

export function CategoriaItem({urlItem,titleItem}) {
    return (
        <div className="categoriaItem-container">
            
            <h3 style={{float:'left', maxWidth:'100%' }}>{titleItem}</h3>
            <img style={{float:'left', maxWidth:'100%'}} src={urlItem}/>
        </div>
        
    )
}
