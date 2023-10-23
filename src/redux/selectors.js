const selectProducts = (state) => state.products.products;
const selectProductsAdded = (state) => state.products.addedProducts;
const selectUserName = (state) => state.user.name;
const selectUserEmail = (state) => state.user.name;
const selectUserToken = (state) => state.user.token;
const selectUserTestimonials = (state) => state.user.testimonials;
const selectUserIsLoggedIn = (state) => state.user.isLoggedin;
const selectIsLoading = (state) => state.user.isLoading;

export {
  selectProducts,
  selectProductsAdded,
  selectUserName,
  selectUserEmail,
  selectUserToken,
  selectUserTestimonials,
  selectUserIsLoggedIn,
  selectIsLoading,
};
