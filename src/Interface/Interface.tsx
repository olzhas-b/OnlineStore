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
export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
  }
export interface Users {
    users: User[],
    loginUser:(user:User)=>false,
    addUser:(user:User)=>void
}
export interface Data {
    products: Product[],
    basket: Basket[],
    favorite: string[],
    total: 0,
    addBasket: (arg0: string) => void,
    addFavorite: (arg0: string) => void,
    reduction: (arg0: string) => void,
    increase: (arg0: string) => void,
    removeProduct: (arg0: string) => void,
    getTotal: () => void;
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
        log_reg: string
    },
    en: {
        title: string,
        home: string,
        contact: string,
        about: string,
        favorite: string,
        log_reg: string
    },
    changeLanguage: () => void
}

export interface ITodo {
    title: string,
    id: number,
    completed: boolean
  }

export interface Detail {
    id: string,
    product: Product[]
}

