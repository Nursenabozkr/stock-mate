import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import HomeFooter from '../components/homeComponent/HomeFooter';

function OperationPage() {
  const [formData, setFormData] = useState({
    clientName: '',
    operationDescription: '',
    operationType: '',
    operationAmount: '',
    operationPayMethod: '',
    operationPayNote: ''
  });

  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    try {
      const response = await fetch('/api/clients');
      const data = await response.json();
      setClients(data);
    } catch (error) {
      console.log('Hata:', error);
    }
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
  
    if (checked) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        operationType: name
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/operations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Başarılı")
        console.log('Başarılı');
      } else {
        alert("Başarısız")
      }
    } catch (error) {
      console.log('Try\'a girmedi');
    }
  };
    return (
        <div className='ml-64 p-5 px-10'>
             <h1 className=' font-sans font-semibold   mt-10 pl-16 text-left w-full'>Gelir Gider Sayfası</h1>
            <Sidebar />
            <div class="  ">
       <div class="p-4">
           <div className='flex flex-col pt-5 pl-10 mb-20'>
              <div className='w-full  '>            
      <form className='bg-gray-800 p-10 rounded-md' onSubmit={handleSubmit}>
      <div className='relative bg-gray-800 text-white  z-0 w-full mb-6 group'>
                  <select
                    name="clientName"
                    id="clientName"
                    className='block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300  appearance-none text-white bg-gray-800 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                    required
                    value={formData.clientName}
                    onChange={handleChange}
                  >
                    {clients.map((client) => (
                      <option 
                      className='bg-gray-800 text-white'
                      key={client._id} value={client.clientName}>{client.clientName}</option>
                    ))}
                  </select>
                  <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Müşteri ismi</label>
                </div>
      <div class="relative z-0 w-full mb-6 group">
      <input
      type="text"
      name="operationDescription"
      id="operationDescription"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=""
      required=""
      value={formData.operationDescription}
      onChange={handleChange}
    />
          <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Acıklama</label>
      </div>
      
      <div class="relative z-0  mb-12 group ">
         
         <label for="floating_repeat_password" class="peer-focus:font-medium absolute   text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">İşlem Tipi</label>
            </div>             
      <div className="grid md:grid-cols-4 md:gap-6 mb-10 mt-5">
<div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
    <input 
    id="gelir" 
    type="checkbox" 
    name="gelir" 
    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    value={formData.operationType} 
    checked={formData.operationType === "gelir"}
    onChange={(event) => {
      handleCheckboxChange(event);
      handleChange(event);
    }}
    />
    <label for="bordered-checkbox-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gelir</label>
</div>
<div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
    <input 
    id="gider" 
    type="checkbox" 
    name="gider" 
    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    checked={formData.operationType === "gider"}
    value={formData.operationType} 
    onChange={(event) => {
      handleCheckboxChange(event);
      handleChange(event);
    }}
    />
    <label for="bordered-checkbox-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gider</label>
</div>
<div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
    <input 
    id="gkredi_kartielir" 
    type="checkbox" 
    name="kredi_karti" 
    class="w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    checked={formData.operationType === "kredi_karti"}
    value={formData.operationType} 
    onChange={(event) => {
      handleCheckboxChange(event);
      handleChange(event);
    }}
    />
    <label for="bordered-checkbox-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Alacak</label>
</div>
<div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
    <input 
    id="nakit" 
    type="checkbox" 
    name="nakit" 
    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    checked={formData.operationType === "nakit"}
    value={formData.operationType} 
    onChange={(event) => {
      handleCheckboxChange(event);
      handleChange(event);
    }}
    />
    <label for="bordered-checkbox-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Borç</label>
</div>
</div>


<div class="relative z-0 w-full mb-6 group">
<input
      type="text"
      name="operationAmount"
      id="operationAmount"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=""
      required=""
      value={formData.operationAmount}
      onChange={handleChange}
    />
          <label  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tutar</label>
      </div>
      <div class="relative z-0 w-full mb-6 group">
      <input
      type="text"
      name="operationPayMethod"
      id="operationPayMethod"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=""
      required=""
      value={formData.operationPayMethod}
      onChange={handleChange}
    />      
          <label  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ödeme Şekli</label>
      </div>
      <div class="relative z-0 w-full mb-6 group">
      <input
      type="text"
      name="operationPayNote"
      id="operationPayNote"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=""
      required=""
      value={formData.operationPayNote}
      onChange={handleChange}
    />
          <label  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ödeme Notu</label>
      </div>



      <div className='w-full flex justify-center mt-3'>
      <button type="submit" 
      onClick={handleSubmit}
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ekle</button>
      </div>
  </form>
          </div>
          </div>
       </div>
    </div>
            <HomeFooter />
        </div>
      )
}

export default OperationPage





