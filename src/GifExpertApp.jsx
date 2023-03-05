import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState([ ]);

    const onAddCategory = ( newCategory ) => {
        if( categories.includes(newCategory) ) return;
        setCategories( [ newCategory, ...categories ] );
        //setCategories( cat => [ ...cat, 'Valorant' ] );
    }
  
    return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            //setCategories={ setCategories } 
            onNewCategory={ onAddCategory } //si tiene la palabra on significa que está emitiendo algo, es un standard, en realidad se puede enviar cualquier cosa.
        />

        {/*<button onClick={onAddCategory}>Agregar</button>*/}
        
        { 
            categories.map( category => (   
                <GifGrid key={ category } category = { category }/>
            ))
        }

    </>
  )
}
