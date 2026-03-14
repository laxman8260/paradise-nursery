import React from "react";

function CartItem(){

return(

<div style={{padding:"40px"}}>

<h2>Shopping Cart</h2>

<div style={{border:"1px solid gray",padding:"20px",margin:"20px"}}>

<img src="https://i.imgur.com/1.jpg" width="120"/>

<h3>Snake Plant</h3>

<p>Unit Price: $15</p>

<p>Total: $15</p>

<button>+</button>

<button>-</button>

<button>Delete</button>

</div>

<h3>Total Cart Amount: $15</h3>

<button>Checkout</button>

<button>Continue Shopping</button>

</div>

)

}

export default CartItem
