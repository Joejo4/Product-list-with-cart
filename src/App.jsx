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
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.name === productName
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0);
    });
  };

  // Completely remove an item
  const deleteItem = (productName) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== productName));
  };

  // Reset cart for a new order
  const startNewOrder = () => {
    setCart([]);
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        maxWidth: "1250px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "2.2fr 1fr",
        gap: "2rem",
        padding: "2rem",
        fontFamily: "sans-serif",
      }}
    >
      <main>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "1.5rem",
          }}
        >
          Desserts
        </h1>
        <ProductList
          products={data}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </main>
      <aside>
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          deleteItem={deleteItem}
          confirmOrder={() => setIsModalOpen(true)}
        />
      </aside>

      {isModalOpen && <OrderModal cart={cart} startNewOrder={startNewOrder} />}
    </div>
  );
}
