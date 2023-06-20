import React, { useState, useRef } from 'react';
import HomeFooter from '../components/homeComponent/HomeFooter';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data.message);
        console.log(password);
        alert('Giriş başarılı')
        navigate('/panel');
        formRef.current.reset(); // reset form after successful login
      } else {
        alert('Giriş başarısız')
        console.log(data.message);
        console.log(password);
        // TODO: display error message to user
      }
    } catch (err) {
      console.log(password);
      console.error(err);
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
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Giriş yapın
                </h1>
                <form className="space-y-4 md:space-y-6" ref={formRef} onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">
                      Kullanıcı adınız
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="kullanıcı adınız"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                      Şifreniz
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-gray-800 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Giriş yap
                  </button>
                  <p className="text-sm font-light text-gray-500">
                    Kayıtlı değil misiniz? <a href="/register" className="font-medium text-primary-600 hover:underline">Kaydolun</a>
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

export default LoginPage;
