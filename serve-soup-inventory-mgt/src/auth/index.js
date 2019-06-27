import jwtDecode from 'jwt-decode';

const Auth = {
  isAuthenticated() {
    const { soupUserToken } = localStorage;
    if (!soupUserToken) return false;
    const decoded = jwtDecode(soupUserToken);
    if (!decoded
      || !decoded.subject
      || !decoded.username
      || !decoded.iat
      || !decoded.exp) return false;
    return decoded.exp > Date.now() / 1000;
  },
};

export default Auth;
