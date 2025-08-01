import React, { useEffect, useState } from 'react';
import axios from 'axios';

function OrderList() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = () => {
    axios.get('http://localhost:8080/orders')
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const deleteOrder = (id) => {
    axios.delete(`http://localhost:8080/orders/${id}`)
      .then(() => {
        alert('Order deleted');
        fetchOrders();
      });
  };

  return (
    <div>
      <h2>📋 All Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <strong>{order.customerName}</strong> - {order.product} - {order.status}
            <button onClick={() => deleteOrder(order.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderList;

