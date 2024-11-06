import { useEffect, useRef, useState } from "react";
import ProductSingleCard from "./ProductSingleCard";
import { getAllProducts } from "../Utilities";
import { useNavigate } from "react-router-dom";
import PaymentLogo from "../assets/Group.png"

const Cart = () => {
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef(null);
    const navigate = useNavigate();

    const totalCost = products.reduce((sum, product) => sum + product.price, 0);
    const purchase = totalCost === 0;

    useEffect(() => {
        const addedProducts = getAllProducts();
        setProducts(addedProducts);
    }, []);

    useEffect(() => {
        if (showModal && modalRef.current) {
            modalRef.current.showModal();
        }
    }, [showModal]);

    const handleSortBtn = () => {
        const sorted = [...products].sort((a, b) => b.price - a.price);
        setProducts(sorted);
    };

    const handlePurchase = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        if (modalRef.current) {
            modalRef.current.close();
        }
        setProducts([]); 
        localStorage.removeItem("addedProduct");
        navigate("/");
    };

    return (
        <div>
            <div className="flex flex-col lg:flex-row md:flex-row lg:justify-between mt-5">
                <p className="text-2xl font-extrabold">Cart</p>
                <div className="flex gap-4 items-center"> 
                <p className="text-xl lg:text-2xl md:text-2xl font-bold">Total Cost: <span className="font-normal">{totalCost}</span> $</p>
                <button onClick={handleSortBtn} className="btn rounded-full bg-[#9538E2] text-white">Sort by Price</button>
                <button onClick={handlePurchase} disabled={purchase} className="btn rounded-full bg-[#9538E2] text-white">Purchase</button>
                {showModal && (
                        <dialog ref={modalRef} id="my_modal_1" className="modal">
                            <div className="modal-box flex justify-center items-center flex-col">
                                <div>
                                    <img src={PaymentLogo} alt="" />
                                </div>
                                <h3 className="font-bold text-lg">Purchase Successful!</h3>
                                <p className="py-4">Thank you for your purchase.</p>
                                <p>Total Cost: {totalCost}</p>
                                <div className="modal-action">
                                    <button onClick={handleCloseModal} className="btn">
                                        Close
                                    </button>
                                </div>
                            </div>
                        </dialog>
                    )}
                </div>
            </div>
            <div className="flex flex-col gap-6 w-11/12 mx-auto">
                
                            {
                                products.map(card => <ProductSingleCard key={card.product_id} card={card}></ProductSingleCard>)
                            }
                
            </div>
        </div>
    );
};

export default Cart;