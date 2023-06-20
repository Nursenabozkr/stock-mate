import React, { useState, useEffect } from 'react';
import HomeFooter from '../components/homeComponent/HomeFooter';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';

function DepoListPage() {
  const [stocks, setStocks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('/api/stocks')
      .then(response => response.json())
      .then(data => setStocks(data));
  }, []);

  const handleEdit = (stockId) => {
 
    navigate(`/depo/edit/${stockId}`);
  };


  const handleDelete = (stockId) => {
    fetch(`/api/stocks/${stockId}`, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          // Silme işlemi başarılı
          setStocks(prevStocks => prevStocks.filter(stock => stock._id !== stockId));
        } else {
          // Silme işlemi başarısız
          console.error('Depo silinirken bir hata oluştu.');
        }
      })
      .catch(error => {
        console.error('Depo silinirken bir hata oluştu:', error);
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
                  Depo Adı
                </th>
                <th scope="col" className="px-6 pl-11 py-3">
                  Depo Durumu
                </th>
                <th scope="col" className="px-6 py-3">
                  Depo Sorumlusu
                </th>
                <th scope="col" className="px-6 py-3">
                  Depo Açıklaması
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {stocks.map((stock) => (
                <tr className="bg-white dark:bg-gray-800" key={stock._id}>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {stock.stockName}
                  </td>
                  <td className="px-6 py-4">%{stock.stockStatus}</td>
                  <td className="px-6 py-4">{stock.stockSupervisor}</td>
                  <td className="px-6 py-4">{stock.stockDescription}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleEdit(stock._id)}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 mr-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Düzenle
                    </button>
                    <button
                      onClick={() => handleDelete(stock._id)}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
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

export default DepoListPage;
