import React, {useContext} from 'react'
import {DataContext} from '../../../Contexts/Context'
import {Product} from "../../../Interface/Interface";
import Item from './Item'
import style from '../../css/Basket.module.css'
import {ThemeContext} from "../../../Contexts/ThemeContext";
// const Item = lazy(() => import('./Item'));
function Favorite() {
    const themeContext = useContext(ThemeContext);
    const context = useContext(DataContext);
    const {favorite} = context;
    if(favorite.length === 0){
        return <h2 style={{textAlign:"center"}}>Your Favorite is empty </h2>
    }else{
        return (

            <div className={"top"}>
                <div className={style.space}>
                    {
                        favorite.map( (item: Product) =>(<Item item={item}/>))
                    }
                </div>
            </div>

        )
    }

}

export default Favorite
