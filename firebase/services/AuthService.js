import { auth } from '../connect'

class AuthService {
  getAuth() {
    return auth;
  }
}

export default new AuthService();