export default {
  getToken() {
    return localStorage.getItem('threads-token');
  },
  isLoggedIn() {
    return this.getToken() !== null;
  }
}
