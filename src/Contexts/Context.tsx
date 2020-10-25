import React, { Component } from 'react'
import {Data} from "../Interface/Interface";
import {initialData} from "../Data/initialDATA";


export const DataContext = React.createContext<Data | any>(initialData);

export class DataProvider extends Component {

    state: Data  = initialData;
     addFavorite = (id: string) => {
         const {products, favorite} = this.state;
         const check = favorite.every(item =>{
             return item._id !== id
         })
         if(check){
             const data = products.filter(product =>{
                 return product._id === id
             })
             this.setState({favorite: favorite.concat(data)})
         } else{
             alert("The product has been added to Favorite.")
         }
     }
     addBasket = (id: string) => {
        const {products, basket} = this.state;
         const check = basket.every(item =>{
             return item._id !== id
         })
         if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({basket: basket.concat(data)})
        } else{
            alert("The product has been added to basket.")
        }
    };

    reduction = (id: string) => {
        const { basket } = this.state;
        basket.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({basket: basket});
        this.getTotal();
    };

    increase = (id: string) => {
        const { basket } = this.state;
        basket.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({basket: basket});
        this.getTotal();
    };

    removeProduct = (id: string) => {
        if(window.confirm("Do you want to delete this product?")){
            const {basket} = this.state;
            basket.forEach((item, index) =>{
                if(item._id === id){
                    basket.splice(index, 1)
                }
            })
            this.setState({basket: basket});
            this.getTotal();
        }

    };

    getTotal = () => {
        const{basket} = this.state;
        const res = basket.reduce((sum, item) => {
            return sum + (item.price * item.count);
        }, 0)
        this.setState({total: res})
    };
    removeFavorite = (id: string) => {
        if(window.confirm("Do you want to delete this product?")){
            const {favorite} = this.state;
            favorite.forEach((item, index) =>{
                if(item._id === id){
                    favorite.splice(index, 1)
                }
            })
            this.setState({favorite: favorite});
            this.getTotal();
        }
    }

    render() {
        const {products, basket, total, favorite} = this.state;
        const {addBasket,reduction,increase,removeProduct, removeFavorite,getTotal, addFavorite} = this;
        return (
            <DataContext.Provider value={{removeFavorite, products, basket, total,favorite, addBasket, addFavorite, reduction,increase,removeProduct,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

