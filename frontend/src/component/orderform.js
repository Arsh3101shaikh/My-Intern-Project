import React, { useState } from 'react';
import axios from 'axios';

function OrderForm() {
  const [order, setOrder] = useState({ customerName: '', product: '', status: '' });

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/orders', order)
      .then(() => {
        alert('Order created!');
        setOrder({ customerName: '', product: '', status: '' });
      })
      .catch((err) => alert('Error creating order: ' + err.message));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="customerName" value={order.customerName} onChange={handleChange} placeholder="Customer Name" required />
      <input name="product" value={order.product} onChange={handleChange} placeholder="Product" required />
      <input name="status" value={order.status} onChange={handleChange} placeholder="Status" required />
      <button type="submit">Create Order</button>
    </form>
  );
}

export default OrderForm;

