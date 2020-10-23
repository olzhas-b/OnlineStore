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
        const res = basket.reduce((prev, item) => {
            return prev + (item.price * item.count);
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

    // componentDidUpdate(){
    //     localStorage.setItem('dataBasket', JSON.stringify(this.state.basket))
    //     localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    // };
    //
    // componentDidMount(){
    //     const dataBasket = JSON.parse(localStorage.getItem('dataBasket') as string);
    //     if(dataBasket !== null){
    //         this.setState({basket: dataBasket});
    //     }
    //     const dataTotal = JSON.parse(localStorage.getItem('dataTotal') as string);
    //     if(dataTotal !== null){
    //         this.setState({total: dataTotal});
    //     }
    // }


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


// {
//     "_id": "2",
//     "title": "Nike Shoes 02",
//     "src": "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
//     "description": "UI/UX designing, html css tutorials",
//     "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
//     "price": 19,
//     "colors": ["red", "crimson", "teal"],
//     "count": 1
// },
// {
//     "_id": "3",
//     "title": "Nike Shoes 03",
//     "src": "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
//     "description": "UI/UX designing, html css tutorials",
//     "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
//     "price": 50,
//     "colors": ["lightblue", "white", "crimson", "teal"],
//     "count": 1
// },
// {
//     "_id": "4",
//     "title": "Nike Shoes 04",
//     "src": "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
//     "description": "UI/UX designing, html css tutorials",
//     "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
//     "price": 15,
//     "colors": ["orange", "black", "crimson", "teal"],
//     "count": 1
// },
// {
//     "_id": "5",
//     "title": "Nike Shoes 05",
//     "src": "https://www.upsieutoc.com/images/2020/06/27/img5.jpg",
//     "description": "UI/UX designing, html css tutorials",
//     "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
//     "price": 10,
//     "colors": ["orange", "black", "crimson", "teal"],
//     "count": 1
// },
// {
//     "_id": "6",
//     "title": "Nike Shoes 06",
//     "src": "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",
//     "description": "UI/UX designing, html css tutorials",
//     "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
//     "price": 17,
//     "colors": ["orange", "black", "crimson", "teal"],
//     "count": 1
// }
