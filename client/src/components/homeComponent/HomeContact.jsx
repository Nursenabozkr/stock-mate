import React, { useState } from 'react';

function HomeContact() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // E-posta gönderme işlemini gerçekleştir
    const data = {
      email,
      subject,
      message
    };
    fetch('/api/send-mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          console.log('E-posta gönderildi.');
          setEmail('');
          setSubject('');
          setMessage('');
          alert("Başarılı ile gönderildi")
        } else {
          console.error('E-posta gönderme hatası.');
        }
      })
      .catch(error => {
        console.error('E-posta gönderme hatası:', error);
      });
  };

  return (
    <div>
    <section className="bg-white dark:bg-gray-900">
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">İletişim</h2>
    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Teknik bir sorununuz mu var? Beta özelliği hakkında geri bildirim mi göndermek istiyorsunuz? İş planımız hakkında bilgi mi almak istiyorsunuz? Bize bildirin.</p>
    <form onSubmit={handleSubmit} className="space-y-8">
    <div>
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">E-posta Adresiniz</label>
    <input
    type="email"
    id="email"
    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
    placeholder="mail@gmail.com"
    required
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    />
    </div>
    <div>
    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Konu</label>
    <input
    type="text"
    id="subject"
    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
    placeholder="Nasıl yardımcı olabileceğimizi bize bildirin"
    required
    value={subject}
    onChange={(e) => setSubject(e.target.value)}
    />
    </div>
    <div className="sm:col-span-2">
    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Mesajınız</label>
    <textarea
    id="message"
    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 h-32 resize-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
    placeholder="Mesajınızı buraya yazın"
    required
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    ></textarea>
    </div>
    <div className="flex items-center justify-center">
    <button
                 type="submit"
                 className="px-6 py-3 text-sm font-semibold text-white bg-indigo-800 rounded-lg hover:bg-primary-600 focus:bg-primary-600 focus:outline-none"
               >
    Mesaj Gönder
    </button>
    </div>
    </form>
    </div>
    </section>
    </div>
    );
    }
    
    export default HomeContact;