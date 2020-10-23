import React, {useContext, useEffect, useState} from 'react'
import {DataContext} from "../../../Contexts/Context";
import {Product as PRODUCT, Detail} from '../../../Interface/Interface'
import {Comment} from '../CommentForm/Comment'
import {detail} from '../../../Data/initialDATA'
import {likeCountHOC} from './LikeCountHOC'
import LikeArea from './LikeArea'

const Wrapped2 = likeCountHOC()(LikeArea);

export function Details() {
    const context = useContext(DataContext);
    const {products} = useContext(DataContext);
    const [output, setOutput] = useState(detail);
    const [id, setId] = useState('');
    useEffect(() => {
        let param = window.location.pathname.split('/');
        let id = param[param.length - 1];
        id = id.split('').reverse().join('');
        for (let i = 0; i < products.length; i++) {
            if(id === products[i]._id) {
                setOutput( {id: output.id, product: products[i]})
            }
        }
    },[])
    return (
        <>
            <div>
                <Wrapped2 style={{ padding: 20, background: "palegreen" }} />
            </div>
            <div className="container mt-4" key={output.product._id}>
                <img src={output.product.src}  alt="good"/>
                <div className="box">
                    <div className="row">
                        <h2>{output.product.title}</h2>
                        <span className="ml-2">${output.product.price}</span>
                    </div>
                    <p>{output.product.description}</p>
                    <p>{output.product.content}</p>
                </div>
            </div>
            <Comment />

        </>
    )
}

export default Details

