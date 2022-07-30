import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import Cart from '../Cart/Cart';
import ReviewItems from "../ReviewItems/ReviewItems";

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    return (
        <div className="shop-container">
            <div className="products-container">
                <h4>our cart is: {cart.length}</h4>
                
                {
                    cart.map(product => <ReviewItems
                        key={product.id}
                        product={product}
                    ></ReviewItems>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};


export default Orders;