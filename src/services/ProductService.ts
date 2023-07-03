import api from "../utils/api";
import { delay } from "../utils/delay";

class ProductService {
    async listProducts() {
        await delay(500);

        const response = await api.get('/products');
        return response.data;
    }
}

export default new ProductService();