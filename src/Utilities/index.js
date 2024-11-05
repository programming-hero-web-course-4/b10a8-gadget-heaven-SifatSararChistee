import toast from "react-hot-toast";

const getAllProducts = () => {
  const all = localStorage.getItem("addedProduct");

  if (all) {
    const addedProduct = JSON.parse(all);
    return addedProduct;
  } else {
    return [];
  }
};

const addToCart = (product) => {
  const addedProduct = getAllProducts();
  const isExist = addedProduct.find(
    (item) => item.product_id == product.product_id
  );
  if (isExist) return toast.error("Already Added this Product to the Cart");
  addedProduct.push(product);
  localStorage.setItem("addedProduct", JSON.stringify(addedProduct));
  toast.success("Successfully Added this Product to the Card");
};

const getAllProductsToWish = () => {
  const all = localStorage.getItem("addedProductToWish");
  if (all) {
    const addedProduct = JSON.parse(all);
    return addedProduct;
  } else {
    return [];
  }
};

const addToWish = (product) => {
  const addedProductToWish = getAllProductsToWish();
  const isExist = addedProductToWish.find(
    (item) => item.product_id == product.product_id
  );
  if (isExist) return toast.error("Already Added this Product to the WishList");
  addedProductToWish.push(product);
  localStorage.setItem(
    "addedProductToWish",
    JSON.stringify(addedProductToWish)
  );
  toast.success("Successfully Added this Product to WishList");
};

export { addToCart, addToWish, getAllProducts, getAllProductsToWish };
