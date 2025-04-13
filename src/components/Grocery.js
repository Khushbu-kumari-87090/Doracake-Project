// src/components/Grocery.js
import React from 'react';
import './Grocery.css'; // You can style the component using this CSS file

const Grocery = () => {
  const groceryItems = [
    { id: 1, name: 'Chocolate Cake', price: '$15.99', description: 'Rich and moist chocolate cake topped with creamy chocolate frosting.' },
    { id: 2, name: 'Vanilla Cake', price: '$12.99', description: 'Classic vanilla cake with a light and fluffy texture, topped with vanilla buttercream.' },
    { id: 3, name: 'Red Velvet Cake', price: '$18.99', description: 'A luxurious red velvet cake with a hint of cocoa, layered with cream cheese frosting.' },
    { id: 4, name: 'Cheesecake', price: '$20.00', description: 'Creamy cheesecake with a graham cracker crust, available in various flavors.' },
    { id: 5, name: 'Carrot Cake', price: '$17.50', description: 'Moist and spiced carrot cake with cream cheese frosting and a touch of walnuts.' },
    { id: 6, name: 'Lemon Cake', price: '$14.25', description: 'Refreshing lemon cake with a tangy lemon glaze and fluffy lemon frosting.' },
  ];

  return (
    <div className="grocery-container">
      <h2>Available Cakes</h2>
      <ul className="grocery-list">
        {groceryItems.map(item => (
          <li key={item.id} className="grocery-item">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="grocery-price">{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Grocery;
