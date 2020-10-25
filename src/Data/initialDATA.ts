
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
        {
            _id: "13",
            title: "Iphone 12",
            src: "https://i.pinimg.com/736x/8b/60/4a/8b604a0f29f7a07156f369050c36ac7f.jpg",
            description: "iPhone 12 Pro, 128 ГБ, Графитовый. новая поколения",
            content: "iPhone 12 Pro способен передавать\n" +
                "данные по сетям LTE со скоростью\n" +
                "до 2 Гбит/с. Это означает, что можно\n" +
                "быстрее скачивать файлы и фотографии,\n" +
                "а качество стриминга повысится.\n" +
                "При этом поддерживаются самые разные\n" +
                "диапазоны LTE, поэтому более высокая\n" +
                "скорость доступна вам во многих\n" +
                "городах и странах по всему миру.◊ Самый быстрый\n" +
                "процессор iPhone.\n" +
                "Это первый процессор iPhone\n" +
                "с применением 5-нанометровой\n" +
                "технологии. Более быстрый,\n" +
                "более мощный, более эффективный.",
            price: 999,
            count: 1,
            category: 'phone',
            color: '#b2ff59',
            banner: 'новый'
        },
        {
            _id: "14",
            title: "PS5 Console",
            src: "https://img.mvideo.ru/Pdb/40074203b.jpg",
            description: "  PlayStation 5 — 390x104x260,цифровая версия всего лишь на 12 мм",
            content: 'Главные характеристики PS5 таковы: 8-ядерный процессор AMD Ryzen 3-го поколения на 7-нм микроархитектуре Zen 2 с (переменной) тактовой частотой 3,5 ГЦ, кастомная графика на базе архитектуры AMD RDNA2 с (также переменной) частотой 2,23 Гц, 16 ГБ оперативной памяти типа GDDR6 с пропускной способностью 448 ГБ/c',
            price: 399,
            count: 1,
            category: "console",
            color: '#b2ff59',
            banner: 'новый'
        },
        {
            _id: "15",
            title: "Xbox X series",
            src: "https://gamerz.kz/wp-content/uploads/edd/2020/09/40073271b.jpg",
            description: "The Xbox Series X is almost here. \n" +
                "pre-order now ",
            content: 'The Xbox Series X is Microsoft\'s most powerful next-generation console and will be released on November 10 2020 for $499 / £449 / AU$749. Xbox Series X pre-orders are live now, as are those for the cheaper and less powerful Xbox Series S, though stock of the flagship console has been much harder to find. ',
            price: 449,
            count: 1,
            category: 'console',
            color: '#b2ff59',
            banner: 'новый'
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
