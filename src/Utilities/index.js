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
  if (isExist) return toast.error("Already Added this Product");
  addedProduct.push(product);
  localStorage.setItem("addedProduct", JSON.stringify(addedProduct));
  toast.success("Successfully Added this Product");
};

const addToWish = (product) => {
  console.log(product);
};

export { addToCart, addToWish, getAllProducts };
