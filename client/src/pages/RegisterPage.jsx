import React, { useState } from 'react';
import HomeFooter from '../components/homeComponent/HomeFooter';
import Navbar from '../components/Navbar';

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    username:'',
    email: '',
    password: '',
    confirmPassword: ''
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
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Başarılı kayıt");
      } else {
        alert("Başarısız kayıt");
      }
    } catch (error) {
      console.log("Try'a girmedi");
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <section className="bg-gray-50">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-3">
                  Kayıt Ol!
                </h1>
                <hr style={{ color: '#000000', backgroundColor: '#1F2937', height: .5, borderColor: '#1F2937' }} />
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
           
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 pl-1">
                        Adınız
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Adınız"
                        required=""
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 pl-1">
                        Soyadınız
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Soyadınız"
                        required=""
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                    Mailiniz
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                      Şifre
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      required=""
                    />
                  </div>
                  <div>
              <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900">
                Şifre tekrarı
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="••••••••"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="font-light text-gray-500">
                        Şartları  <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">kabul ediyorum</a>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full text-white bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Kayıt ol
                  </button>
                  <p className="text-sm font-light text-gray-500">
                    Hesabınız var mı? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">giriş yap</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <HomeFooter />
    </div>
  );
}

export default RegisterPage;