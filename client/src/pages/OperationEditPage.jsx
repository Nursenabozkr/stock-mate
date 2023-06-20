import React,{useState,useEffect} from 'react'
import Sidebar from '../components/Sidebar'
import {  useNavigate } from 'react-router-dom';

const OperationEdiPage = ({ id }) => {
    const navigate = useNavigate();
  const [operation, setPerson] = useState(null);
  const [clientName, setClientName] = useState('');
  const [operationDescription, setOperationDescription] = useState('');
  const [operationType, setOperationType] = useState('');
  const [operationAmount, setOperationAmount] = useState('');
  const [operationPayMethod, setOperationPayMethod] = useState('');
  const [operationPayNote, setOperationPayNote] = useState('');



  useEffect(() => {
    fetch(`/api/operation/${id}`)
      .then(response => response.json())
      .then(data => {
        setPerson(data);
        setClientName(data.clientName);
        setOperationDescription(data.operationDescription);
        setOperationType(data.operationType);
        setOperationAmount(data.operationAmount);
        setOperationPayMethod(data.operationPayMethod);
        setOperationPayNote(data.operationPayNote);
      });
  }, [id]);

  const handleSubmit = () => { // Değişiklik burada yapıldı
    const updatedOperation = {
        clientName,
        operationDescription,
        operationType,
        operationAmount,
        operationPayMethod,
        operationPayNote
    };

    fetch(`/api/operation/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedOperation)
    })
      .then(response => {
        if (response.ok) {
          alert("Başarılı ile güncellendi")
          navigate('/operation-list');
        } else {
          alert("Bir sorun yaşandı. tekrar deneyiniz")
          console.error('Operasyon güncellenirken bir hata oluştu.');
        }
      })
      .catch(error => {
        console.error('Operasyon güncellenirken bir hata oluştu:', error);
      });
  };

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


  return (

    <div className='ml-64 p-5 px-10'>
         <h1 className=' font-sans font-semibold   mt-10 pl-16 text-left w-full'>Gelir Gider  </h1>
        <Sidebar />
        <div class="  ">
   <div class="p-4">
       <div className='flex flex-col pt-5 pl-10 mb-20'>
          <div className='w-full  '>          
<form className='bg-gray-800 p-10 rounded-md' onSubmit={handleSubmit}>
  <div class="grid md:grid-cols-2 md:gap-6">
                <div className='relative bg-gray-800 text-white  z-0 w-full mb-6 group'>
                  <select
                    name="clientName"
                    id="clientName"
                    className='block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300  appearance-none text-white bg-gray-800 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                    required
                    value={clientName}
                    onChange={e => setClientName(e.target.value)}
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
                    name="personLastName"
                    id="personLastName"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=""
                    required=""
                    value={operationDescription}
                    onChange={e => setOperationDescription(e.target.value)}
                  />       
    <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Soyad</label>
</div>
</div>
{/* Selection tarzı secmeli olmalı daha sonra bakılmalı */}
  <div class="relative z-0 w-full mb-6 group">
  <input
                    type="text"
                    name="personRole"
                    id="personRole"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=""
                    required=""
                    value={operationType}
                    onChange={e => setOperationType(e.target.value)}
                  />     
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ünvan</label>
  </div>
  <div class="relative z-0 w-full mb-6 group">
  <input
                    type="mail"
                    name="personMail"
                    id="personMail"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=""
                    required=""
                    value={operationAmount}
                    onChange={e => setOperationAmount(e.target.value)}
                  />   
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mail</label>
  </div>
  <div class="relative z-0 w-full mb-6 group">
    
  <input
                    type="number"
                    name="personPhone"
                    id="personPhone"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=""
                    required=""
                    value={operationPayNote}
                    onChange={e => setOperationPayNote(e.target.value)}
                  />   
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefon Numarası</label>
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
</div>
    </div>
  )
}

export default OperationEdiPage