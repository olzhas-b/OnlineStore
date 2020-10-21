
export interface Product {
    _id: string,
    title: string,
    src: string,
    description: string,
    content: string,
    price: number,
    count: number,
    category: string

}
export interface Basket {
    _id: string,
    title: string,
    src: string,
    description: string,
    content: string,
    price: number,
    count: number
}
export interface Data {
    products: Product[],
    basket: Basket[],
    favorite: string[],
    total: 0
    addBasket: (arg0: string) => void,
    reduction: (arg0: string) => void,
    increase: (arg0: string) => void,
    removeProduct: (arg0: string) => void,
    getTotal: () => void;
}

export const initialData: Data = {
        products: [
            {
                _id: "",
                title: "",
                src: "",
                description: "",
                content: "",
                price: 0,
                count: 1,
                category: '1'
            }
        ],
        basket: [],
        favorite: [],
        total: 0,
        addBasket:  (id: string) => {},
        reduction:   () => {},
        increase: arg0 => {},
        removeProduct: arg0 => {},
        getTotal: () => {},
}

