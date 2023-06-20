import React, { useState, useEffect,useParams} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import './output.css'
import Dashboard from './pages/Dashboard';
import ProductPage from './pages/ProductPage';
import StockPage from './pages/StockPage';
import PersonPage from './pages/PersonPage';
import ClientPage from './pages/ClientPage';
import OperationPage from './pages/OperationPage';
import DepoListPage from './pages/DepoListPage';
import ProductListPage from './pages/ProductListPage';
import PersonListPage from './pages/PersonListPage';
import ClientListPage from './pages/ClientListPage';
import OperationListPage from './pages/OperationListPage';
import DepoEditPage from './pages/DepoEditPage';
import ProductEditPage from './pages/ProductEditPage';
import PersonEditPage from './pages/PersonEditPage';
import ClientEditPage from './pages/ClientEditPage';
import OperationEditPage from './pages/OperationEditPage';
import Panel from './pages/Panel';
function App() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch('/api/stocks')
      .then(response => response.json())
      .then(data => setStocks(data));
  }, []);

  const [persons, setPersons] = useState([]);

  useEffect(() => {
    fetch('/api/persons')
      .then(response => response.json())
      .then(data => setPersons(data));
  }, []);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);


  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch('/api/clients')
      .then(response => response.json())
      .then(data => setClients(data));
  }, []);

  
  const [operations, setOperations] = useState([]);

  useEffect(() => {
    fetch('/api/operations')
      .then(response => response.json())
      .then(data => setOperations(data));
  }, []);



  return (
    <Router>
    <Routes>
      <Route path="/" element={<Homepage />} /> 
      <Route path="/login" element={<Login />} /> 
      <Route path="/panel" element={<Panel />} /> 
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/product-page" element={<ProductPage />} />
      <Route path="/product-list" element={<ProductListPage />} />
      <Route path="/stock-page" element={<StockPage />} />
      <Route path="/person-page" element={<PersonPage />} />
      <Route path="/client-page" element={<ClientPage />} />
      <Route path="/depo-list" element={<DepoListPage />} />
      <Route path="/operations" element={<OperationPage />} />
      <Route path="/person-list" element={<PersonListPage />} />
      <Route path="/client-list" element={<ClientListPage />} />
      <Route path="/operation-list" element={<OperationListPage />} />
      {stocks.map((stock) =>
        <Route path={`/depo/edit/${stock._id}`} element={<DepoEditPage id={stock._id} />} />)}
         {products.map((product) =>
        <Route path={`/product/edit/${product._id}`} element={<ProductEditPage id={product._id} />} />)
        }
          {persons.map((person) =>
        <Route path={`/person/edit/${person._id}`} element={<PersonEditPage id={person._id} />} />)}
         {clients.map((client) =>
        <Route path={`/client/edit/${client._id}`} element={<ClientEditPage id={client._id} />} />)}

        {operations.map((operation) =>
        <Route path={`/operation/edit/${operation._id}`} element={<OperationEditPage id={operation._id} />} />)}
    </Routes>
  </Router>
  );
}

export default App;
