import React,{useState,useEffect} from 'react'
import Sidebar from '../components/Sidebar'
import HomeFooter from '../components/homeComponent/HomeFooter'
import { useParams, useNavigate } from 'react-router-dom';

const PersonEditPage = ({ id }) => {
    const navigate = useNavigate();
  const [person, setPerson] = useState(null);
  const [personName, setPersonName] = useState('');
  const [personLastName, setPersonLastName] = useState('');
  const [personRole, setPersonRole] = useState('');
  const [personMail, setPersonMail] = useState('');
  const [personPhone, setPersonPhone] = useState('');
  const [personDescription, setPersonDescription] = useState('');



  useEffect(() => {
    fetch(`/api/person/${id}`)
      .then(response => response.json())
      .then(data => {
        setPerson(data);
        setPersonName(data.personName);
        setPersonLastName(data.personLastName);
        setPersonRole(data.personRole);
        setPersonMail(data.personMail);
        setPersonPhone(data.personPhone);
        setPersonDescription(data.personDescription);
      });
  }, [id]);

  const handleSubmit = () => { // Değişiklik burada yapıldı
    const updatedPerson = {
        personName,
        personLastName,
        personRole,
        personMail,
        personPhone,
        personDescription
    };

    fetch(`/api/person/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedPerson)
    })
      .then(response => {
        if (response.ok) {
          alert("Başarılı ile güncellendi")
          navigate('/person-list');
        } else {
          alert("Bir sorun yaşandı. tekrar deneyiniz")
          console.error('Personel güncellenirken bir hata oluştu.');
        }
      })
      .catch(error => {
        console.error('Personel güncellenirken bir hata oluştu:', error);
      });
  };

  return (

    <div className='ml-64 p-5 px-10'>
         <h1 className=' font-sans font-semibold   mt-10 pl-16 text-left w-full'>Kişiler </h1>
        <Sidebar />
        <div class="  ">
   <div class="p-4">
       <div className='flex flex-col pt-5 pl-10 mb-20'>
          <div className='w-full  '>          
<form className='bg-gray-800 p-10 rounded-md' onSubmit={handleSubmit}>
  <div class="grid md:grid-cols-2 md:gap-6">
<div class="relative z-0 w-full mb-6 group">
<input
                    type="text"
                    name="personName"
                    id="personName"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=""
                    required=""
                    value={personName}
                    onChange={e => setPersonName(e.target.value)}
                  />
    <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ad</label>
</div>
<div class="relative z-0 w-full mb-6 group">
<input
                    type="text"
                    name="personLastName"
                    id="personLastName"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=""
                    required=""
                    value={personLastName}
                    onChange={e => setPersonLastName(e.target.value)}
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
                    value={personRole}
                    onChange={e => setPersonRole(e.target.value)}
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
                    value={personMail}
                    onChange={e => setPersonMail(e.target.value)}
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
                    value={personPhone}
                    onChange={e => setPersonPhone(e.target.value)}
                  />   
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefon Numarası</label>
  </div>
  <div class="relative z-0 w-full mb-6 group">
  <input
                    type="text"
                    name="personDescription"
                    id="personDescription"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=""
                    required=""
                    value={personDescription}
                    onChange={e => setPersonDescription(e.target.value)}
                  /> 
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Acıklama</label>
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

export default PersonEditPage