import Product from "./Product";

type Cart = {
	id: string;
	amount: number;
	total: number;
	created_at: Date;
	updated_at: Date;
	finished_at?: Date;
	user_id: string;
	products: Product[];
};

export default Cart;
