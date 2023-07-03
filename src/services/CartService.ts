import api from "../utils/api";
import { delay } from "../utils/delay";

class CartService {
    async getCart() {
        await delay(500);

        const response = await api.get('/carts');
        return response.data;
    }

    async addProduct(product_ids: string[]) {
        await delay(500);

        const response = await api.patch('/carts/add-products', { product_ids });
        return response.data;
    }

    async removeProduct(product_id: string) {
        await delay(500);

        const response = await api.patch('/carts/remove-products', { product_id });
        return response.data;
    }

    async removeCartItem(product_id: string) {
        await delay(500);

        const response = await api.patch('/carts/remove-cart-items', { product_id });
        return response.data;
    }
}

export default new CartService();