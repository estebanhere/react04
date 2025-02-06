import { useState } from "react"
import { AddCategory, GiftGrid } from "./components/";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['el chavo', 'simpsons', 'futurama']);

    const onAddCategory = (newCategory) => { 

        if(categories.includes(newCategory)) return;

        setCategories([...categories, newCategory]);
    }

  return (
    <>

    <h1>GifExpertApp</h1>

    <AddCategory 
    //setCategories ={setCategories}
      onNewCategory={(event) => onAddCategory(event)}
    />

    {/*<button onClick={ onAddCategory } >agregar</button>*/ }
    
        {
            categories.map(category =>   
              (
                <GiftGrid key={category} category={category}/>
              )
              )
        }
        
    

    </>
  )
}
