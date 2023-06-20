import React, { useState, useEffect } from 'react';
import HomeFooter from '../components/homeComponent/HomeFooter';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';

function ClientListPage() {
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('/api/clients')
      .then(response => response.json())
      .then(data => setClients(data));
  }, []);

  const handleEdit = (personId) => {
 
    navigate(`/client/edit/${personId}`);
  };


  const handleDelete = (personId) => {
    fetch(`/api/client/${personId}`, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          // Silme işlemi başarılı
          setClients(prevClients => prevClients.filter(client => client._id !== personId));
        } else {
          // Silme işlemi başarısız
          console.error('Müşteri silinirken bir hata oluştu.');
        }
      })
      .catch(error => {
        console.error('Müşteri silinirken bir hata oluştu:', error);
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
                  Ad
                </th>
                <th scope="col" className="px-6 pl-11 py-3">
                  Soyad
                </th>
                <th scope="col" className="px-6 py-3">
                  Ünvan
                </th>
                <th scope="col" className="px-6 py-3">
                  Mail
                </th>
                <th scope="col" className="px-6 py-3">
                  Telefon
                </th>
                <th scope="col" className="px-6 py-3">
                  Acıklama
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr className="bg-white dark:bg-gray-800" key={client._id}>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {client.clientName}
                  </td>
        
                  <td className="px-6 py-4">{client.clientLastName}</td>
                  <td className="px-6 py-4">{client.clientRole}</td>
                  <td className="px-6 py-4">{client.clientMail}</td>
                  <td className="px-6 py-4">{client.clientPhone}</td>
                  <td className="px-6 py-4">{client.clientDescription}</td>
                  <td className="px-6 py-4">
                  <button
                      onClick={() => handleEdit(client._id)}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 mr-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Düzenle
                    </button>
                    <button
                      onClick={() => handleDelete(client._id)}
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

export default ClientListPage;
