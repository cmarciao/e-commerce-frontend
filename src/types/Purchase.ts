import Product from "./Product";

interface Purchase {
    id: string;
    finished_at: Date;
    amount: number;
    price: number;
    products: Product[]
};

export default Purchase;