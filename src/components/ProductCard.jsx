import React from "react";

export default function ProductCard({
  product,
  cartItem,
  addToCart,
  removeFromCart,
}) {
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <article className="product-card">
      <div className={`image-container ${quantity > 0 ? "selected" : ""}`}>
        <picture>
          <source media="(max-width: 639px)" srcSet={product.image.mobile} />
          <source media="(max-width: 1023px)" srcSet={product.image.tablet} />
          <img
            src={product.image.desktop}
            alt={product.name}
            className="product-img"
          />
        </picture>

        {quantity === 0 ? (
          <button
            className="add-to-cart-btn"
            onClick={() => addToCart(product)}
          >
            <img
              src="/assets/images/icon-add-to-cart.svg"
              alt="Add to cart icon"
            />
            Add to Cart
          </button>
        ) : (
          <div className="quantity-control-btn">
            <button
              className="qty-btn"
              onClick={() => removeFromCart(product.name)}
              aria-label={`Remove one ${product.name}`}
            >
              −
            </button>

            <span>{quantity}</span>

            <button
              className="qty-btn"
              onClick={() => addToCart(product)}
              aria-label={`Add one ${product.name}`}
            >
              +
            </button>
          </div>
        )}
      </div>

      <div className="product-info">
        <span className="category">{product.category}</span>
        <h3 className="name">{product.name}</h3>
        <span className="price">${product.price.toFixed(2)}</span>
      </div>
    </article>
  );
}
