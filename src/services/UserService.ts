import api from "../utils/api";
import { delay } from "../utils/delay";

class UserService {
    async createUser(name: string, email: string, password: string) {
        await delay(500);

        return await api.post('/users', { name, email, password })
    }
}

export default new UserService();