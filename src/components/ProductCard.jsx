import React from "react";

export default function ProductCard({
  product,
  cartItem,
  addToCart,
  removeFromCart,
}) {
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div
      className="product-card"
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "1.5rem",
      }}
    >
      <div style={{ position: "relative", marginBottom: "2rem" }}>
        <img
          src={product.image.desktop}
          alt={product.name}
          style={{
            width: "100%",
            borderRadius: "8px",
            display: "block",
            border: quantity > 0 ? "2px solid hsl(14, 86%, 42%)" : "none",
          }}
        />

        {quantity === 0 ? (
          <button
            onClick={() => addToCart(product)}
            style={{
              position: "absolute",
              bottom: "-20px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "white",
              border: "1px solid #ad9f9b",
              borderRadius: "999px",
              padding: "0.75rem 1.5rem",
              fontWeight: "600",
              fontSize: "0.875rem",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Add to Cart
          </button>
        ) : (
          <div
            style={{
              position: "absolute",
              bottom: "-20px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "hsl(14, 86%, 42%)",
              color: "white",
              borderRadius: "999px",
              padding: "0.75rem 1.25rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "150px",
              fontWeight: "600",
            }}
          >
            <button
              onClick={() => removeFromCart(product.name)}
              style={{
                background: "transparent",
                border: "1px solid white",
                borderRadius: "50%",
                width: "22px",
                height: "22px",
                color: "white",
                cursor: "pointer",
              }}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => addToCart(product)}
              style={{
                background: "transparent",
                border: "1px solid white",
                borderRadius: "50%",
                width: "22px",
                height: "22px",
                color: "white",
                cursor: "pointer",
              }}
            >
              +
            </button>
          </div>
        )}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
        <span style={{ fontSize: "0.875rem", color: "#877c78" }}>
          {product.category}
        </span>
        <h3 style={{ fontSize: "1rem", fontWeight: "600" }}>{product.name}</h3>
        <span
          style={{
            fontSize: "1rem",
            fontWeight: "700",
            color: "hsl(14, 86%, 42%)",
          }}
        >
          ${product.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
