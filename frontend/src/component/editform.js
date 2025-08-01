import React, { useState } from 'react';
import axios from 'axios';

function EditForm() {
  const [id, setId] = useState('');
  const [order, setOrder] = useState({ customerName: '', product: '', status: '' });

  const fetchOrder = () => {
    axios.get(`http://localhost:8080/orders/${id}`)
      .then(res => setOrder(res.data))
      .catch(() => alert('Order not found'));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/orders/${id}`, order)
      .then(() => alert('Order updated'))
      .catch(() => alert('Failed to update order'));
  };

  return (
    <div>
      <h3>✏️ Edit Order</h3>
      <input
        placeholder="Order ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={fetchOrder}>Load Order</button>

      {order.customerName && (
        <form onSubmit={handleUpdate}>
          <input
            name="customerName"
            value={order.customerName}
            onChange={(e) => setOrder({ ...order, customerName: e.target.value })}
            placeholder="Customer Name"
          />
          <input
            name="product"
            value={order.product}
            onChange={(e) => setOrder({ ...order, product: e.target.value })}
            placeholder="Product"
          />
          <input
            name="status"
            value={order.status}
            onChange={(e) => setOrder({ ...order, status: e.target.value })}
            placeholder="Status"
          />
          <button type="submit">Update Order</button>
        </form>
      )}
    </div>
  );
}

export default EditForm;

