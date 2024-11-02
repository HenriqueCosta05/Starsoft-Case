// Aqui, estarão todos os types que correspondem ao payload das actions

export type Item = {
    id?: number;
    name: string;
    description: string;
    image: string;
    price: number;
    createdAt?: Date | string;
}

export type CartState = {
    items: Item[];
    amount: number;
}