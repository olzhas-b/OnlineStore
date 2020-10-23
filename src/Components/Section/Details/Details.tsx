import React, {Component} from 'react'
import {DataContext} from "../../../Contexts/Context";
import {Product, Detail} from '../../../Interface/Interface'
import {Comment} from '../CommentForm/Comment'
import {detail} from '../../../Data/initialDATA'
import {likeCountHOC} from './LikeCountHOC'
import LikeArea from './LikeArea'

const Wrapped2 = likeCountHOC()(LikeArea);

export class Details extends Component {
    static contextType = DataContext;

    state : Detail = detail;

    getId = () => {
        let param = window.location.pathname.split('/');
        let id = param[param.length - 1];
        id = id.split('').reverse().join('');
        this.setState({id: id});
    }
    componentDidMount(){
        this.getId();
        this.getProduct()
    }
    getProduct = () => {
        const res = this.context.products;
        const data = res.filter( (item: Product) =>{
            return item._id === this.state.id
        })
        console.log(data);
        this.setState({...this.state, product: data});

    };
    render() {
        const {product} = this.state;
        return (
            <>
                <div>
                    <Wrapped2 style={{ padding: 20, background: "palegreen" }} />
                </div>

                {
                    product.map((item: Product) => (

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

                        )
                    )
                }
                <Comment />

            </>
        )
    }
}

export default Details
