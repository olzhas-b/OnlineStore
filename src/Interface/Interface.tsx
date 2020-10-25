export interface Product {
    _id: string,
    title: string,
    src: string,
    description: string,
    content: string,
    price: number,
    count: number,
    category: string,
    color: string,
    banner: string
}
export interface Basket {
    _id: string,
    title: string,
    src: string,
    description: string,
    content: string,
    price: number,
    count: number,
    category: string,
    color: string,
    banner: string
}
export interface Favorite {
    _id: string,
    title: string,
    src: string,
    description: string,
    content: string,
    price: number,
    count: number,
    category: string,
    color: string,
    banner: string
}
export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
  }
export interface Users {
    users: User[],
    idAuth: number,
    loginUser:(user:User)=>false,
    addUser:(user:User)=>void,
    isUser:()=>User,
    editUser:(user:User,pass:string,name:string)=>boolean
}
export interface Data {
    products: Product[],
    basket: Basket[],
    favorite: Favorite[],
    total: 0,
}


export interface theme {
    isLightTheme: boolean,
    header_light: {
        color: string,
        background: string
    },
    header_dark : {
        color: string,
        background: string
    },
    section_light: {
        color: string,
        background: string
    },
    section_dark : {
        color: string,
        background: string
    },
    item_light: {
        color: string,
        background: string
    },
    item_dark : {
        color: string,
        background: string
    },
    changeTheme: () => void,
}



export interface LANGUAGE {
    isEN: boolean,
    ru: {
        title: string,
        home: string,
        contact: string,
        about: string,
        favorite: string,
        log_reg: string,
        profile: string
    },
    en: {
        title: string,
        home: string,
        contact: string,
        about: string,
        favorite: string,
        log_reg: string,
        profile: string
    },
}

export interface Currency {
    isUSD: boolean,
    tg: {
        title: string,
        symbol: string

    },
    usd: {
        title: string,
        symbol: string
    },
    changeCurrency: () => void
}


export interface ITodo {
    title: string,
    id: number,
    completed: boolean
  }

export interface Detail {
    product: Product[]
}

