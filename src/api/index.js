export default {
  getProducts (cb) {
    setTimeout(() => cb([{name: 'jang'}, {name: 'cho'}]), 100);
  },
}
