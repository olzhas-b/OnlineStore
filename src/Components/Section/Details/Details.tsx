import React, {useContext, useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import {DataContext} from "../../../Contexts/Context";
import {Product as PRODUCT, Detail} from '../../../Interface/Interface'
import {Comment} from '../CommentForm/Comment'
import {detail} from '../../../Data/initialDATA'
import {likeCountHOC} from './LikeCountHOC'
import LikeArea from './LikeArea'

const Wrapped2 = likeCountHOC()(LikeArea);

export function Details() {
    const location = useLocation();
    const {products} = useContext(DataContext);
    const [output, setOutput] = useState(detail);
    useEffect(() => {
        const id = location.pathname.split('/').pop()
        setOutput({product: products.filter((item : PRODUCT) => (item._id === id))})
    },[])
    return (
        <>
            {
                output.product.map((item: PRODUCT) => (
                    <div>
                        <div>
                            <Wrapped2 style={{ padding: 20, background: "palegreen" }} />
                        </div>
                        <div className="container mt-4" key={item._id}>
                            <img src={item.src}  alt="good"/>
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span className="ml-2">${item.price}</span>
                                </div>
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                            </div>
                        </div>
                    </div>
                ))
            }

            <Comment />

        </>
    )
}

export default Details

