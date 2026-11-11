import React, { useState } from "react";
import data from "./data/data.json";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import OrderModal from "./components/OrderModal";

export default function App() {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add item or increment quantity
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === product.name);

      if (existingItem) {
        return prevCart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Decrement quantity or remove item
  const removeFromCart = (productName) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === productName
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  // Completely remove an item
  const deleteItem = (productName) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== productName));
  };

  // Confirm order
  const confirmOrder = () => {
    if (cart.length > 0) {
      setIsModalOpen(true);
    }
  };

  // Start a new order
  const startNewOrder = () => {
    setCart([]);
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <main className="product-section">
        <h1>Desserts</h1>

        <ProductList
          products={data}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </main>

      <aside className="cart-sidebar">
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          deleteItem={deleteItem}
          confirmOrder={confirmOrder}
        />
      </aside>

      {isModalOpen && <OrderModal cart={cart} startNewOrder={startNewOrder} />}
    </div>
  );
}
