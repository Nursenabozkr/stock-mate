import React, { useState,useEffect } from 'react';
import HomeFooter from '../components/homeComponent/HomeFooter'
import Sidebar from '../components/Sidebar'
import { useNavigate } from 'react-router-dom';
// Depo durumu progress bar şeklinde istiyor.
function Dashboard() {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    stockName: '',
    stockStatus:'',
    stockSupervisor: '',
    stockDescription: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/stocks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

   
      if (response.ok) {
        alert("Başarılı")
       } else {
         alert("Başarısız")
       }
    } catch (error) {
      console.log("Try'a girmedi");
    }
  };
  return (

    <div className='p-5 pl-72'>
         <h1 className=' font-sans font-semibold   mt-10 pl-16 text-left w-full'>Depo Sayfası</h1>
        <Sidebar />
       
        <div class="  ">
   <div class="p-4">
       <div className='flex flex-col pt-5 pl-10 mb-20'>
          <div className='w-full  '>          

<form className='bg-gray-800 p-10 rounded-md'  onSubmit={handleSubmit}>
  <div class="relative z-0 w-full mb-6 group">
  <input
                        type="text"
                        name="stockName"
                        id="stockName"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder=""
                        required=""
                        value={formData.stockName}
                        onChange={handleChange}
                      />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Depo Adı</label>
  </div>
  <div class="relative z-0 w-full mb-6 group">
  <input
                        type="number"
                        name="stockStatus"
                        id="stockStatus"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder=""
                        required=""
                        value={formData.stockStatus}
                        onChange={handleChange}
                        max="100"
                        min="0"
                      />
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Depo Durumu</label>
  </div>
  <div class="relative z-0 w-full mb-6 group">
  <input
                        type="text"
                        name="stockSupervisor"
                        id="stockSupervisor"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder=""
                        required=""
                        value={formData.stockSupervisor}
                        onChange={handleChange}
                      />
      <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Depo Sorumlusu</label>
  </div>
  <div class="relative z-0 w-full mb-6 group">
  <input
                        type="text"
                        name="stockDescription"
                        id="stockDescription"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder=""
                        required=""
                        value={formData.stockDescription}
                        onChange={handleChange}
                      />
      <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Depo Acıklaması</label>
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

export default Dashboard