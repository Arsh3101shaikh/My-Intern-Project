import React from 'react';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';
import EditForm from './components/EditForm';

function App() {
  return (
    <div className="container">
      <h1>🧾 Order Management System</h1>
      <OrderForm />
      <OrderList />
      <EditForm />
    </div>
  );
}

export default App;

