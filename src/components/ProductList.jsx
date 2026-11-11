import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({
  products,
  cart,
  addToCart,
  removeFromCart,
}) {
  return (
    <div className="product-grid">
      {products.map((product) => {
        const cartItem = cart.find((item) => item.name === product.name);

        return (
          <ProductCard
            key={product.name}
            product={product}
            cartItem={cartItem}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        );
      })}
    </div>
  );
}
