import { getGifs } from "../helpers/getGifts";
import { useState, useEffect } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GiftGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs(category);

    console.log({images, isLoading});


    /*useEffect(() => {
        getGifs(category)
        .then( imgs => setImages(imgs));
    }, [category]); // si la categoria cambia se vuelve a ejecutar el useEffect */

    getGifs(category);

  return (<>
        <h3>{ category }</h3>
        {
            isLoading && (<h2 > cargando...</h2>)
        }
        <div className="card-grid">
            {
                images.map( (img) => (
                    <GifItem key={img.id} {...img}/>
                    /*<li key={id}> {title}   
                        <img src={url} alt={title}/>
                    </li>*/
                ))
            }
        </div>
    </>
  )
}
