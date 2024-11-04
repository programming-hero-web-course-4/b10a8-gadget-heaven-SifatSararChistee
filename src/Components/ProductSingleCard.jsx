const ProductSingleCard = ({card}) => {
    const {product_title,price,product_image }= card;
    return (
<div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={product_image}
      alt={product_title}
      className="rounded-xl h-[180px] w-full object-cover" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{product_title}</h2>
    <p className="text-lg font-medium">Price: {price} $</p>
    <div className="card-actions">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
    );
};

export default ProductSingleCard;