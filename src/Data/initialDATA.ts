import {Data, LANGUAGE, theme} from "../Interface/Interface";

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
            category: 'electronics'
        },
        {
            _id: "1",
            title: "Nike Shoes 21",
            src: "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
            description: "UI/UX designing, html css tutorials",
            content: "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            price: 23,
            count: 1,
            category: 'electronics'
        },
        {
            _id: "2",
            title: "Nike Shoes 21",
            src: "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
            description: "UI/UX designing, html css tutorials",
            content: "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            price: 23,
            count: 1,
            category: 'electronics'
        },
        {
            _id: "3",
            title: "Nike Shoes 21",
            src: "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
            description: "UI/UX designing, html css tutorials",
            content: "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            price: 23,
            count: 1,
            category: 'electronics'
        },
        {
            _id: "4",
            title: "Nike Shoes 21",
            src: "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
            description: "UI/UX designing, html css tutorials",
            content: "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            price: 23,
            count: 1,
            category: 'electronics'
        },
        {
            _id: "5",
            title: "Nike Shoes 21",
            src: "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
            description: "UI/UX designing, html css tutorials",
            content: "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            price: 23,
            count: 1,
            category: 'electronics'
        },

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
