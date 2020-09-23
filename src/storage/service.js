const TOKEN_KEY = 'user-token';
const TOKEN_USER = 'user-name';

const TokenService = {
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },
  getUser() {
    return localStorage.getItem(TOKEN_USER);
  },
};

export { TokenService };
