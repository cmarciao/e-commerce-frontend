import api from "../utils/api";
import { delay } from "../utils/delay";

class AuthService {
    async me() {
        await delay(500);
        
        const response = await api.get('/me');
        return response.data;
    }

    async login(email: string, password: string) {
        await delay(500);

        return await api.post('/', { email, password })
    }
}

export default new AuthService();