import React from "react";

function CartItem() {
  return (
    <div>
      <h2>Shopping Cart</h2>

      <div>
        <h3>Snake Plant</h3>

        <p>Unit Price: $15</p>

        <button>+</button>

        <button>-</button>

        <button>Delete</button>
      </div>

      <h3>Total Cart Amount: $15</h3>

      <button>Checkout</button>

      <button>Continue Shopping</button>
    </div>
  );
}

export default CartItem;
