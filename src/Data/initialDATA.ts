import { rootCertificates } from "tls";
import {Data, LANGUAGE, theme, Currency, Users} from "../Interface/Interface";

export const initialData: Data = {
    products: [
        {
            _id: "0",
            title: "Nike Shoes 21",
            src: "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
            description: "UI/UX designing, html css tutorials",
            content: "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            price: 23,
            count: 1,
            category: 'electronics',
            color: 'red',
            banner: 'рассрочка'
        },
        {
            _id: "1",
            title: "Nike Shoes 21",
            src: "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
            description: "UI/UX designing, html css tutorials",
            content: "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            price: 23,
            count: 1,
            category: 'electronics',
            color: '#ffeb3b',
            banner: 'распродажа'
        },
        {
            _id: "2",
            title: "Nike Shoes 21",
            src: "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
            description: "UI/UX designing, html css tutorials",
            content: "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            price: 23,
            count: 1,
            category: 'electronics',
            color: '#b2ff59',
            banner: 'скидка'
        },
        {
            _id: "3",
            title: "Nike Shoes 21",
            src: "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
            description: "UI/UX designing, html css tutorials",
            content: "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            price: 23,
            count: 1,
            category: 'electronics',
            color: 'red',
            banner: 'рассрочка'
        },
        {
            _id: "4",
            title: "Nike Shoes 21",
            src: "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
            description: "UI/UX designing, html css tutorials",
            content: "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            price: 23,
            count: 1,
            category: 'electronics',
            color: 'red',
            banner: 'рассрочка'
        },
        {
            _id: "5",
            title: "Nike Shoes 21",
            src: "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
            description: "UI/UX designing, html css tutorials",
            content: "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            price: 23,
            count: 1,
            category: 'electronics',
            color: '#b2ff59',
            banner: 'скидка'
        },
        {
            _id: "6",
            title: "Nike Shoes 21",
            src: "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
            description: "UI/UX designing, html css tutorials",
            content: "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            price: 23,
            count: 1,
            category: 'electronics',
            color: '#b2ff59',
            banner: 'скидка'
        },
        {
            _id: "7",
            title: "Nike Shoes 21",
            src: "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
            description: "UI/UX designing, html css tutorials",
            content: "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            price: 23,
            count: 1,
            category: 'electronics',
            color: '#b2ff59',
            banner: 'скидка'
        },
        {
            _id: "8",
            title: "Nike Shoes 21",
            src: "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
            description: "UI/UX designing, html css tutorials",
            content: "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            price: 23,
            count: 1,
            category: 'electronics',
            color: '#e040fb',
            banner: 'новый'
        }

    ],
    basket: [],
    favorite: [],
    total: 0,
    addBasket: () => {},
    addFavorite: () => {},
    reduction: () => {},
    increase:  () => {},
    removeProduct: () => {},
    getTotal: () => {}
};
export const initialUsers : Users = {
    users: [
        {"id":0,"email":"root@root.kz","name":"root","password":"Root2020"}
    ],
    addUser: () => {},
    loginUser: ()=> {return false}
}
export const initialTheme : theme = {
    isLightTheme: true,
    header_light: {color:'#555', background: '#eee'},
    header_dark: {color: '#ddd', background: '#2C3E50'},
    section_light: {color:'#555', background: '#fafafa'},
    section_dark: {color: '#ddd', background: '#808B96'},
    changeTheme: () =>  {}
};


export const initialLanguage: LANGUAGE = {
    isEN: true,
    ru: {
        title: 'RU',
        home: 'Главная',
        contact: 'Контакт',
        about: 'О Нас',
        favorite: 'Избранное',
        log_reg: 'Логин/Регистрация',
    },
    en: {
        title: 'EN',
        home: 'Home',
        contact: 'Contact',
        about: 'About',
        favorite: 'Favorite',
        log_reg: 'Login/Registration',
    },
    changeLanguage: () => {}
};

export const initialCurrency: Currency = {
    isUSD: true,
    tg: {
        title: 'Tenge',
        symbol: '₸ ',

    },
    usd: {
        title: 'USD',
        symbol: '$ ',

    },
    changeCurrency: () => {}
};

export const detail = {
    id: '0',
    product: [{
        _id: '',
        title: '',
        src: '',
        description: '',
        content: '',
        price: 1,
        count: 1,
        category: '',
        color: '',
        banner: ''
    }]
}
