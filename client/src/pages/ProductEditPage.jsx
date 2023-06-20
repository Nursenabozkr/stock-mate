import React,{useState,useEffect} from 'react'
import Sidebar from '../components/Sidebar'
import HomeFooter from '../components/homeComponent/HomeFooter'
import { useParams, useNavigate } from 'react-router-dom';

const ProductEditPage = ({ id }) => {
    const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [productName, setProductName] = useState('');
  const [productCode, setProductCode] = useState('');
  const [productGroup, setProductGroup] = useState('');
  const [productSaleAmount, setProductSaleAmount] = useState('');
  const [productPurschareAmount, setProductPurschareAmount] = useState('');
  const [productStockName, setProductStockName] = useState('');
  const [productAmount, setProductAmount] = useState('');


  useEffect(() => {
    fetch(`/api/product/${id}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
        setProductName(data.productName);
        setProductCode(data.productCode);
        setProductGroup(data.productGroup);
        setProductSaleAmount(data.productSaleAmount);
        setProductPurschareAmount(data.productPurschareAmount);
        setProductStockName(data.productStockName);
        setProductAmount(data.productAmount);
      });
  }, [id]);

  const handleSubmit = () => { // Değişiklik burada yapıldı
    const updatedProduct = {
        productName,
        productCode,
        productGroup,
        productSaleAmount,
        productPurschareAmount,
        productStockName,
        productAmount
    };

    fetch(`/api/product/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedProduct)
    })
      .then(response => {
        if (response.ok) {
          alert("Başarılı ile güncellendi")
          navigate('/product-list');
        } else {
          // Güncelleme işlemi başarısız
          alert("Bir sorun yaşandı. tekrar deneyiniz")
        }
      })
      .catch(error => {
        console.error('Ürün güncellenirken bir hata oluştu:', error);
      });
  };


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


 
    return (
        <div className='ml-64 p-5 px-10'>
             <h1 className=' font-sans font-semibold   mt-10 pl-16 text-left w-full'>Ürün Sayfası</h1>
            <Sidebar />
            <div class="  ">
       <div class="p-4">
           <div className='flex flex-col pt-5 pl-10 mb-20'>
              <div className='w-full  '>            
    <form className='bg-gray-800 p-10 rounded-md' onSubmit={handleSubmit}>
      <div class="relative z-0 w-full mb-6 group">
          <input 
          type="text" 
          name="productName" 
          id="productName" 
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
          placeholder=" " 
          required 
          value={productName}
          onChange={e => setProductName(e.target.value)}
          />
          <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ürün Adı</label>
      </div>


      <div class="relative z-0 w-full mb-6 group">
          <input type="text" 
          name="productCode" 
          id="productCode" 
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
          placeholder=" " 
          required 
          value={productCode}
          onChange={e => setProductCode(e.target.value)}
          />
          <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ürün Kodu</label>
      </div>
      <div class="relative z-0 w-full mb-6 group">
          <input 
          type="text" 
          name="productGroup" 
          id="productGroup" 
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " 
          required 
          value={productGroup}
          onChange={e => setProductGroup(e.target.value)}
          />
          <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ürün Grubu</label>
      </div>
      <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-6 group">
        <input 
        type="number"  
        name="productSaleAmount" 
        id="productSaleAmount" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
        required 
        value={productSaleAmount}
        onChange={e => setProductSaleAmount(e.target.value)}
        /> 
        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Satış Fiyatı</label>
    </div>
    <div class="relative z-0 w-full mb-6 group">
        <input 
        type="number" 
        name="productPurschareAmount" 
        id="productPurschareAmount" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " 
        required
        value={productPurschareAmount}
        onChange={e => setProductPurschareAmount(e.target.value)}
        />  
        <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Alış Fiyatı</label>
    </div>
  </div>
      <div class="grid md:grid-cols-2 md:gap-6">
      <div className="relative z-0 w-full mb-6 group">
                  <select
                    name="productStockName"
                    id="productStockName"
                    className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300  appearance-none text-white bg-gray-800 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    required
                    value={productStockName}
                    onChange={e => setProductStockName(e.target.value)}
                  >
                    <option value="" disabled selected>Hangi Depo</option>
                    {stocks.map((stock) => (
                      <option key={stock._id} value={stock.stockName}>{stock.stockName}</option>
                    ))}
                  </select>
                  <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Hangi Depo</label>
                </div>

    <div class="relative z-0 w-full mb-6 group">
        <input type="text" 
        name="productAmount" 
        id="productAmount" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " 
        required 
        value={productAmount}
        onChange={e => setProductAmount(e.target.value)}
        />
        <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Stok sayısı</label>
    </div>
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
            <HomeFooter />
        </div>
      )
}

export default ProductEditPage