import { Category } from "./Category";

export interface Product {
    id: number;
    productImageUrl: string;
    name: string;
    externalNote?: string;
    tag?: string;
    price: number;
    isRecommended: boolean;
    category: Category;
}

