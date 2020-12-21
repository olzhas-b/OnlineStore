import React, { lazy, ReactElement, useEffect, useState } from 'react'
import { Product as PRODUCT } from '../../../Interface/Interface'

const Product = lazy(() => import('./Product'));

interface Props {
    getItems: () => PRODUCT[];
}

export default function HomeList({ getItems }: Props): ReactElement {
    const [items, setItems] = useState<PRODUCT[]>([]);

    useEffect(() => {
        setItems(getItems());
    }, [getItems]);

    return (
        <div className={"items"}>
            { (items === null || items.length === 0) ? <div className={"dontfind"}>We don't find product or category</div> :
                <div id="product">
                    {
                        items.map((product: PRODUCT, index: number) => (
                            
                                <Product product={product} key={index}/>
                        
                        ))
                    }
                </div>
            }
        </div>
    )
}
