import React, { useState, useEffect } from 'react';
import HomeFooter from '../components/homeComponent/HomeFooter';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';


function ProductListPage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);
  const handleEdit = (productId) => {
 
    navigate(`/product/edit/${productId}`);
  };
  const handleDelete = (productId) => {
    fetch(`/api/product/${productId}`, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          // Silme işlemi başarılı
          setProducts(prevProducts => prevProducts.filter(product => product._id !== productId));
        } else {
          // Silme işlemi başarısız
          console.error('Ürün silinirken bir hata oluştu.');
        }
      })
      .catch(error => {
        console.error('Ürün silinirken bir hata oluştu:', error);
      });
  };
  return (
    <div>
      <Sidebar />
      <div className="mt-20 ml-80 px-20 w-[1000]">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Ürün Adı
                </th>
                <th scope="col" className="px-6 pl-11 py-3">
                  Ürün Kodu
                </th>
                <th scope="col" className="px-6 py-3">
                  Ürün Grubu
                </th>
                <th scope="col" className="px-6 py-3">
                  Ürün Satış Fiyatı
                </th>
                <th scope="col" className="px-6 py-3">
                  Ürün Alış Fiyatı
                </th>
                <th scope="col" className="px-6 py-3">
                  Hangi Depoda
                </th>
                <th scope="col" className="px-6 py-3">
                  Ürün Stok Adeti
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr className="bg-white dark:bg-gray-800" key={product._id}>

                  <td className="px-6 py-4">{product.productName}</td>
                  <td className="px-6 py-4">{product.productCode}</td>
                  <td className="px-6 py-4">{product.productGroup}</td>
                  <td className="px-6 py-4">{product.productSaleAmount}</td>
                  <td className="px-6 py-4">{product.productPurschareAmount}</td>
                  <td className="px-6 py-4">{product.productStockName}</td>
                  <td className="px-6 py-4">{product.productAmount}</td>
                  <td className="px-6 py-4">
                    <button 
                    onClick={() => handleEdit(product._id)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 mr-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Düzenle
                    </button>
                    <button 
                     onClick={() => handleDelete(product._id)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Sil
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
}

export default ProductListPage;
