import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import HomeFooter from '../components/homeComponent/HomeFooter';

function ProductPage() {
  const [formData, setFormData] = useState({
    productName: '',
    productCode: '',
    productGroup: '',
    productSaleAmount: '',
    productPurchaseAmount: '',
    productStockName: '',
    productAmount: '',
  });

  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    try {
      const response = await fetch('/api/stocks');
      const data = await response.json();
      setStocks(data);
    } catch (error) {
      console.log('Hata:', error);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Başarılı');
      } else {
        alert('Başarısız');
      }
    } catch (error) {
      console.log('Try\'a girmedi');
    }
  };

  return (
    <div className='ml-64 p-5 px-10'>
      <h1 className='font-sans font-semibold mt-10 pl-16 text-left w-full'>Ürün Sayfası</h1>
      <Sidebar />
      <div class='  '>
        <div class='p-4'>
          <div className='flex flex-col pt-5 pl-10 mb-20'>
            <div className='w-full  '>
              <form className='bg-gray-800 p-10 rounded-md' onSubmit={handleSubmit}>
                <div class='relative z-0 w-full mb-6 group'>
                  <input
                    type='text'
                    name='productName'
                    id='productName'
                    class='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                    placeholder=' '
                    required
                    value={formData.productName}
                    onChange={handleChange}
                  />
                  <label
                    for='floating_email'
                    class='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                    Ürün Adı
                  </label>
                </div>

                <div class='relative z-0 w-full mb-6 group'>
                  <input
                    type='text'
                    name='productCode'
                    id='productCode'
                    class='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                    placeholder=' '
                    required
                    value={formData.productCode}
                    onChange={handleChange}
                  />
                  <label
                    for='floating_repeat_password'
                    class='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                    Ürün Kodu
                  </label>
                </div>
                <div class='relative z-0 w-full mb-6 group'>
                  <input
                    type='text'
                    name='productGroup'
                    id='productGroup'
                    class='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                    placeholder=' '
                    required
                    value={formData.productGroup}
                    onChange={handleChange}
                  />
                  <label
                    for='floating_password'
                    class='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                    Ürün Grubu
                  </label>
                </div>
                <div class='grid md:grid-cols-2 md:gap-6'>
                  <div class='relative z-0 w-full mb-6 group'>
                    <input
                      type='number'
                      name='productSaleAmount'
                      id='productSaleAmount'
                      class='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                      placeholder=' '
                      required
                      value={formData.productSaleAmount}
                      onChange={handleChange}
                    />
                    <label
                      for='floating_phone'
                      class='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                    >
                      Satış Fiyatı
                    </label>
                  </div>
                  <div class='relative z-0 w-full mb-6 group'>
                    <input
                      type='number'
                      name='productPurchaseAmount'
                      id='productPurchaseAmount'
                      class='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                      placeholder=' '
                      required
                      value={formData.productPurchaseAmount}
                      onChange={handleChange}
                    />
                    <label
                      for='floating_company'
                      class='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                    >
                      Alış Fiyatı
                    </label>
                  </div>
                </div>
                <div class='grid md:grid-cols-2 md:gap-6'>
                  <div className='relative bg-gray-800 text-white  z-0 w-full mb-6 group'>
                    <select
                      name='productStockName'
                      id='productStockName'
                      className='block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300  appearance-none text-white bg-gray-800 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                      required
                      value={formData.productStockName}
                      onChange={handleChange}
                    >
                      {stocks.map((stock) => (
                        <option
                          className='bg-gray-800 text-white'
                          key={stock._id}
                          value={stock.stockName}
                        >
                          {stock.stockName}
                        </option>
                      ))}
                    </select>
                    <label
                      htmlFor='floating_phone'
                      className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                    >
                      Hangi Depo
                    </label>
                  </div>
                  <div class='relative z-0 w-full mb-6 group'>
                    <input
                      type='text'
                      name='productAmount'
                      id='productAmount'
                      class='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                      placeholder=' '
                      required
                      value={formData.productAmount}
                      onChange={handleChange}
                    />
                    <label
                      for='floating_company'
                      class='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                    >
                      Stok sayısı
                    </label>
                  </div>
                </div>
                <div className='w-full flex justify-center mt-3'>
                  <button
                    type='submit'
                    onClick={handleSubmit}
                    className='py-2 px-5 rounded-lg bg-blue-600 text-white font-medium focus:outline-none hover:bg-blue-500 hover:shadow-lg transition duration-300'
                  >
                    Ürün Ekle
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
}

export default ProductPage;
