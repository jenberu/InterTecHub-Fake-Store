import React, { useEffect, useState } from 'react';
import { fetchCart,updateCart,deleteCart } from '../../api';

const Cart = () => {
    const [cart, setCart] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await fetchCart(1); // Example user ID
            setCart(data);
        };
        fetchData();
    }, []);

    const handleUpdateCart = async (id, quantity) => {
        const updatedCart = cart.products.map((item) =>
            item.productId === id ? { ...item, quantity } : item
        );
        await updateCart(1, { products: updatedCart });
        setCart({ ...cart, products: updatedCart });
    };

    if (!cart) return <p>Loading...</p>;

    return (
        <div>
            <h1>Your Cart</h1>
            {cart.products.map((item) => (
                <div key={item.productId}>
                    <p>Product ID: {item.productId}</p>
                    <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                            handleUpdateCart(item.productId, Number(e.target.value))
                        }
                    />
                    <button onClick={() => handleUpdateCart(item.productId, 0)}>
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Cart;
