import React, {useContext, useEffect, useState} from 'react'
import {DataContext} from '../../../Contexts/Context'
import {Link} from 'react-router-dom'
import {Product} from "../../../Interface/Interface";
import Item from "./Item";

function Favorite() {
    const context = useContext(DataContext);
    const {favorite} = context;
    if(favorite.length === 0){
        return <h2 style={{textAlign:"center"}}>Your Favorite is empty </h2>
    }else{
        return (
            <div className={"top"}>
                {
                    favorite.map( (item: Product) =>(<Item item={item}/>))
                }
            </div>

        )
    }

}

export default Favorite
