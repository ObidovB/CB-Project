export interface Product {
    id: number;
    title: string;
    grade: string;
    description: string;
    price: string;
    image: string;
    usage: string;
    composition: {
        cement: string;
        sand: string;
        crushedStone: string;
        water: string;
        supplements: string;
    };
    specs?: string[];
};