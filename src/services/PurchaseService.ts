import api from "../utils/api";
import { delay } from "../utils/delay";

class PurchaseService {
    async listPurchases() {
        await delay(500);
        
        const response = await api.get('/sales');
        return response.data;
    }
}

export default new PurchaseService();