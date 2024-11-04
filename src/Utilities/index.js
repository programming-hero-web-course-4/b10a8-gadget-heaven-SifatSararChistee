const getAllProducts = () => {
  const all = localStorage.getItem("addedProduct");
  consol.log(all);
};

const addToCart = (product) => {
  const addedProduct = [];
  addedProduct.push(product);
  localStorage.setItem("addedProduct", JSON.stringify(addedProduct));
};

const addToWish = (product) => {
  console.log(product);
};

export { addToCart, addToWish };
