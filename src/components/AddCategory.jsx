import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    

    const [inputValue, setInputValue] = useState('cualquiernombrre')

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => { 
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;
        console.log(inputValue);
        //setCategories( cats => [inputValue, ...cats]);
        setInputValue('');
        onNewCategory(inputValue.trim());
        
    }

  return (

    <form onSubmit={ (e) => onSubmit(e) }>
        <input type="text" placeholder="buscar"  value={inputValue} onChange={ onInputChange }/>
    </form>
  )
}
