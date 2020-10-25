
import {Data, LANGUAGE, theme, Currency, Users} from "../Interface/Interface";
export const initialData: Data = {
    products: [

        {
            _id: "0",
            title: "ПЛАНШЕТ HUION",
            src: "https://object.pscloud.io/cms/cms/Photo/img_0_1419_31_0_320.png",
            description: " Если ваша работа связана с творчеством где приходится вручную создавать",
            content: "Он поддерживает работу с устройствами, функционирующими на Windows и Mac OS, гарантируя высокую отдачу. HUION KAMVAS Pro 20 поддерживает перьевой ввод, для чего в комплекте предусмотрена цифровая ручка PW507, обладающая чувствительностью 8192 уровня. Это позволяет с разной интенсивностью нажимать на экран и получать ожидаемый результат. Благодаря этому вы быстро добьетесь успехов. Беспроводное подключение пера способствует более комфортной работе, поскольку вам не будут мешать провода.",
            price: 1243,
            count: 1,
            category: 'electronics',
            color: '#b2ff59',
            banner: 'новый'
        },
        {
            _id: "1",
            title: "СМАРТФОН HUAWEI",
            src: "https://object.pscloud.io/cms/cms/Photo/img_0_77_2371_7.jpg",
            description: "Квадрокамера на 48 Мп, технология быстрой зарядки Supercharge 40Ватт",
            content: "hiami",
            price: 323,
            count: 1,
            category: 'phone',
            color: 'red',
            banner: 'рассрочка'
        },
        {
            _id: "2",
            title: "МОНОБЛОК APPLE",
            src: "https://object.pscloud.io/cms/cms/Photo/img_0_437_66_0.jpg",
            description: "Все модели iMac работает с частотой до 3,6 Г",
            content: "Совершенно новые процессоры, инновационные графические технологии, передовые накопители и разъёмы с впечатляющей пропускной способностью — всё это новый iMac. Работать на iMac теперь ещё интереснее и увлекательнее..",
            price: 2200,
            count: 1,
            category: 'electronics',
            color: '#e040fb',
            banner: 'скидка'
        },
        {
            _id: "3",
            title: "ASUS TUF GAMING",
            src: "https://object.pscloud.io/cms/cms/Photo/img_0_62_1888_3_1.jpg",
            description: "Новейший процессор AMD Ryzen и видеокарта NVIDIA GeForce",
            content: "Дисплей NanoEdge становится все изящнее. Теперь толщина его рамки составляет всего 6,5 мм*, что позволило сделать корпус ноутбука еще более компактным. В модели TUF Gaming FX505 используется IPS-панель с высокой частотой обновления (до 120 Гц).",
            price: 900,
            count: 1,
            category: 'electronics',
            color: '#e040fb',
            banner: 'скидка'
        },
        {
            _id: "4",
            title: "МОНОБЛОК APPLE",
            src: "https://object.pscloud.io/cms/cms/Photo/img_0_437_66_0.jpg",
            description: "Все модели iMac работает с частотой до 3,6 Г",
            content: "Совершенно новые процессоры, инновационные графические технологии, передовые накопители и разъёмы с впечатляющей пропускной способностью — всё это новый iMac. Работать на iMac теперь ещё интереснее и увлекательнее..",
            price: 2200,
            count: 1,
            category: 'electronics',
            color: '#e040fb',
            banner: 'скидка'
        },
        {
            _id: "5",
            title: "ASUS TUF GAMING",
            src: "https://object.pscloud.io/cms/cms/Photo/img_0_62_1888_3_1.jpg",
            description: "Новейший процессор AMD Ryzen и видеокарта NVIDIA GeForce",
            content: "Дисплей NanoEdge становится все изящнее. Теперь толщина его рамки составляет всего 6,5 мм*, что позволило сделать корпус ноутбука еще более компактным. В модели TUF Gaming FX505 используется IPS-панель с высокой частотой обновления (до 120 Гц).",
            price: 900,
            count: 1,
            category: 'laptop',
            color: '#e040fb',
            banner: 'скидка'
        },
        {
            _id: "6",
            title: "ПЛАНШЕТ HUION",
            src: "https://object.pscloud.io/cms/cms/Photo/img_0_1419_31_0_320.png",
            description: " Если ваша работа связана с творчеством где приходится вручную создавать",
            content: "Он поддерживает работу с устройствами, функционирующими на Windows и Mac OS, гарантируя высокую отдачу. HUION KAMVAS Pro 20 поддерживает перьевой ввод, для чего в комплекте предусмотрена цифровая ручка PW507, обладающая чувствительностью 8192 уровня. Это позволяет с разной интенсивностью нажимать на экран и получать ожидаемый результат. Благодаря этому вы быстро добьетесь успехов. Беспроводное подключение пера способствует более комфортной работе, поскольку вам не будут мешать провода.",
            price: 1243,
            count: 1,
            category: 'electronics',
            color: '#b2ff59',
            banner: 'новый'
        },
        {
            _id: "7",
            title: "СМАРТФОН HUAWEI",
            src: "https://object.pscloud.io/cms/cms/Photo/img_0_77_2371_7.jpg",
            description: "Квадрокамера на 48 Мп, технология быстрой зарядки Supercharge 40Ватт",
            content: "hiami",
            price: 323,
            count: 1,
            category: 'phone',
            color: 'red',
            banner: 'рассрочка'
        },
        {
            _id: "8",
            title: "ПЛАНШЕТ HUION",
            src: "https://object.pscloud.io/cms/cms/Photo/img_0_1419_31_0_320.png",
            description: " Если ваша работа связана с творчеством где приходится вручную создавать",
            content: "Он поддерживает работу с устройствами, функционирующими на Windows и Mac OS, гарантируя высокую отдачу. HUION KAMVAS Pro 20 поддерживает перьевой ввод, для чего в комплекте предусмотрена цифровая ручка PW507, обладающая чувствительностью 8192 уровня. Это позволяет с разной интенсивностью нажимать на экран и получать ожидаемый результат. Благодаря этому вы быстро добьетесь успехов. Беспроводное подключение пера способствует более комфортной работе, поскольку вам не будут мешать провода.",
            price: 1243,
            count: 1,
            category: 'electronics',
            color: '#b2ff59',
            banner: 'новый'
        },
        {
            _id: "9",
            title: "СМАРТФОН HUAWEI",
            src: "https://object.pscloud.io/cms/cms/Photo/img_0_77_2371_7.jpg",
            description: "Квадрокамера на 48 Мп, технология быстрой зарядки Supercharge 40Ватт",
            content: "hiami",
            price: 323,
            count: 1,
            category: 'phone',
            color: 'red',
            banner: 'рассрочка'
        },
        {
            _id: "10",
            title: "МОНОБЛОК APPLE",
            src: "https://object.pscloud.io/cms/cms/Photo/img_0_437_66_0.jpg",
            description: "Все модели iMac работает с частотой до 3,6 Г",
            content: "Совершенно новые процессоры, инновационные графические технологии, передовые накопители и разъёмы с впечатляющей пропускной способностью — всё это новый iMac. Работать на iMac теперь ещё интереснее и увлекательнее..",
            price: 2200,
            count: 1,
            category: 'laptop',
            color: '#e040fb',
            banner: 'скидка'
        },
        {
            _id: "11",
            title: "ASUS TUF GAMING",
            src: "https://object.pscloud.io/cms/cms/Photo/img_0_62_1888_3_1.jpg",
            description: "Новейший процессор AMD Ryzen и видеокарта NVIDIA GeForce",
            content: "Дисплей NanoEdge становится все изящнее. Теперь толщина его рамки составляет всего 6,5 мм*, что позволило сделать корпус ноутбука еще более компактным. В модели TUF Gaming FX505 используется IPS-панель с высокой частотой обновления (до 120 Гц).",
            price: 900,
            count: 1,
            category: 'laptop',
            color: '#e040fb',
            banner: 'скидка'
        },
        {
            _id: "12",
            title: "МОНОБЛОК APPLE",
            src: "https://object.pscloud.io/cms/cms/Photo/img_0_437_66_0.jpg",
            description: "Все модели iMac работает с частотой до 3,6 Г",
            content: "Совершенно новые процессоры, инновационные графические технологии, передовые накопители и разъёмы с впечатляющей пропускной способностью — всё это новый iMac. Работать на iMac теперь ещё интереснее и увлекательнее..",
            price: 2200,
            count: 1,
            category: 'laptop',
            color: '#e040fb',
            banner: 'скидка'
        },
    ],
    basket: [],
    favorite: [],
    total: 0
};
export const initialUsers : Users = {
    users: [
        {"id":0,"email":"root@root.kz","name":"root","password":"Root2020"}
    ],
    addUser: () => {},
    loginUser: ()=> {return false},
    isUser: ()=>{return {"id":-1,"email":"","name":"","password":""}},
    editUser:()=>{return false},
    idAuth: -1
}
export const initialTheme : theme = {
    isLightTheme: true,
    header_light: {color:'#555', background: '#eee'},
    header_dark: {color: '#494428', background: 'black'},
    section_light: {color:'#555', background: '#fafafa'},
    section_dark: {color: 'white', background: '#454545'},
    item_light: {color:'#555', background: '#fafafa'},
    item_dark: {color: 'white', background: '#393939'},
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
        profile: 'Профиль'
    },
    en: {
        title: 'EN',
        home: 'Home',
        contact: 'Contact',
        about: 'About',
        favorite: 'Favorite',
        log_reg: 'Login/Registration',
        profile: 'Profile'
    }
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
export const emailRex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+).([a-zA-Z]{2,5})$/;
export const passRex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
