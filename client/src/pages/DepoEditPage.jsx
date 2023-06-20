import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HomeFooter from '../components/homeComponent/HomeFooter';
import Sidebar from '../components/Sidebar';

const DepoEditPage = ({ id }) => {
    const navigate = useNavigate();
  const [stock, setStock] = useState(null);
  const [stockName, setStockName] = useState('');
  const [stockStatus, setStockStatus] = useState('');
  const [stockSupervisor, setStockSupervisor] = useState('');
  const [stockDescription, setStockDescription] = useState('');

  useEffect(() => {
    fetch(`/api/stocks/${id}`)
      .then(response => response.json())
      .then(data => {
        setStock(data);
        setStockName(data.stockName);
        setStockStatus(data.stockStatus);
        setStockSupervisor(data.stockSupervisor);
        setStockDescription(data.stockDescription);
      });
  }, [id]);

  const handleSubmit = () => { // Değişiklik burada yapıldı
    const updatedStock = {
      stockName,
      stockStatus,
      stockSupervisor,
      stockDescription
    };

    fetch(`/api/stocks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedStock)
    })
      .then(response => {
        if (response.ok) {
          alert("Başarılı ile güncellendi")
          // Güncelleme işlemi başarılı

        } else {
          alert("Bir sorun yaşandı. tekrar deneyiniz")
          console.error('Depo güncellenirken bir hata oluştu.');
        }
      })
      .catch(error => {
        console.error('Depo güncellenirken bir hata oluştu:', error);
      });
  };

  return (
    <div className="p-5 pl-80">
      <h1 className="font-sans font-semibold mt-10 pl-80 text-left w-full">Depo Sayfası</h1>
      <Sidebar />
      <div className=" ">
        <div className="p-4">
          <div className="flex flex-col pt-5 pl-10 mb-20">
            <div className="w-full ">
              <form className="bg-gray-800 p-10 rounded-md">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="stockName"
                    id="stockName"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder={stockName}
                    value={stockName}
                    onChange={e => setStockName(e.target.value)}
                    required
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Depo Adı
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="stockStatus"
                    id="stockStatus"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=""
                    value={stockStatus}
                    onChange={e => setStockStatus(e.target.value)}
                    required
                  />
                  <label
                    htmlFor="floating_password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Depo Durumu
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="stockSupervisor"
                    id="stockSupervisor"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=""
                    value={stockSupervisor}
                    onChange={e => setStockSupervisor(e.target.value)}
                    required
                  />
                  <label
                    htmlFor="floating_repeat_password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Depo Sorumlusu
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="stockDescription"
                    id="stockDescription"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=""
                    value={stockDescription}
                    onChange={e => setStockDescription(e.target.value)}
                    required
                  />
                  <label
                    htmlFor="floating_repeat_password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Depo Açıklaması
                  </label>
                </div>

                <div className="w-full flex justify-center mt-3">
                  <button
                    type="submit"
                    onClick={handleSubmit} // Değişiklik burada yapıldı
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Güncelle
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <HomeFooter />
      </div>
    </div>
  );
}

export default DepoEditPage;
