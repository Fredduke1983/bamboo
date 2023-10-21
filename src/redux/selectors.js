const selectProducts = (state) => state.products.products;
const selectProductsAdded = (state) => state.products.addedProducts;
const selectUserName = (state) => state.user.name;
const selectUserEmail = (state) => state.user.name;
const selectUserToken = (state) => state.user.token;
const selectUserTestimonials = (state) => state.user.testimonials;
const selectUserIsLoggedIn = (state) => state.user.isLoggedIn;

export {
  selectProducts,
  selectProductsAdded,
  selectUserName,
  selectUserEmail,
  selectUserToken,
  selectUserTestimonials,
  selectUserIsLoggedIn,
};
