import React, { useState, useEffect } from 'react';
import HomeFooter from '../components/homeComponent/HomeFooter';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';

function PersonPageList() {
  const [operations, setOperations] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('/api/operations')
      .then(response => response.json())
      .then(data => setOperations(data));
  }, []);

  const handleEdit = (operationId) => {
 
    navigate(`/operation/edit/${operationId}`);
  };


  const handleDelete = (operationId) => {
    fetch(`/api/operation/${operationId}`, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          // Silme işlemi başarılı
          setOperations(prevOperations => prevOperations.filter(operation => operation._id !== operationId));
        } else {
          // Silme işlemi başarısız
          console.error('İşlem silinirken bir hata oluştu.');
        }
      })
      .catch(error => {
        console.error('İşlem silinirken bir hata oluştu:', error);
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
                  Müşteri Adı
                </th>
                <th scope="col" className="px-6 pl-11 py-3">
                  Acıklama
                </th>
                <th scope="col" className="px-6 py-3">
                  İşlem Türü
                </th>
                <th scope="col" className="px-6 py-3">
                  İşlem Tutarı
                </th>
                <th scope="col" className="px-6 py-3">
                  Ödeme Türü
                </th>
                <th scope="col" className="px-6 py-3">
                  Ödeme Notu
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {operations.map((operation) => (
                <tr className="bg-white dark:bg-gray-800" key={operation._id}>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {operation.clientName}
                  </td>
        
                  <td className="px-6 py-4">{operation.operationDescription}</td>
                  <td className="px-6 py-4">{operation.operationType}</td>
                  <td className="px-6 py-4">{operation.operationAmount}</td>
                  <td className="px-6 py-4">{operation.operationPayMethod}</td>
                  <td className="px-6 py-4">{operation.operationPayNote}</td>
                  <td className="px-6 py-4">
                  <button
                      onClick={() => handleEdit(operation._id)}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 mr-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Düzenle
                    </button>
                    <button
                      onClick={() => handleDelete(operation._id)}
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

export default PersonPageList;
