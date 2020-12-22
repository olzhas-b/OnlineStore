import React, { lazy, ReactElement, useEffect, useState } from 'react'

import style from '../../css/HomeList.module.css';
import { Product as PRODUCT } from '../../../Interface/Interface'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
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
        <div className={style.items}>
            { (items === null || items.length === 0) ? <div className={style.dontfind}>We don't find product or category</div> :
                <div className={style.product}>
                    {
                        items.map((product: PRODUCT, index: number) => (
                            <ErrorBoundary>
                                <Product product={product} key={index}/>
                            </ErrorBoundary>
                        ))
                    }
                </div>
            }
        </div>
    )
}
