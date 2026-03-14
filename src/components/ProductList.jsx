import React from "react";

const plants = [

{ id:1, name:"Snake Plant", price:15, category:"Indoor", img:"https://i.imgur.com/1.jpg" },
{ id:2, name:"Aloe Vera", price:10, category:"Indoor", img:"https://i.imgur.com/2.jpg" },

{ id:3, name:"Peace Lily", price:20, category:"Flowering", img:"https://i.imgur.com/3.jpg" },
{ id:4, name:"Orchid", price:25, category:"Flowering", img:"https://i.imgur.com/4.jpg" },

{ id:5, name:"Money Plant", price:18, category:"Air Purifying", img:"https://i.imgur.com/5.jpg" },
{ id:6, name:"Spider Plant", price:12, category:"Air Purifying", img:"https://i.imgur.com/6.jpg" }

];

function ProductList() {

return (

<div style={{padding:"40px"}}>

<h2>Our Plants</h2>

{plants.map(plant => (

<div key={plant.id} style={{border:"1px solid gray",margin:"20px",padding:"10px"}}>

<img src={plant.img} width="120" />

<h3>{plant.name}</h3>

<p>Category: {plant.category}</p>

<p>Price: ${plant.price}</p>

<button>Add to Cart</button>

</div>

))}

</div>

)

}

export default ProductList
