import React from 'react'

import Sidebar from '../components/Sidebar'
import Table from '../components/Table'



function StockPage() {
    return (

        <div className='ml-64 p-5 px-10'>
             <h1 className=' font-sans font-semibold   mt-10 pl-16 text-left w-full'>Stok Sayfası</h1>
            <Sidebar />
           
            <div class="  ">
       <div class="p-4">
           <div className='flex flex-col pt-5 pl-10 mb-20'>
              <div className='w-full  '>          

    
    
              </div>
              <div className='w-full '>
                 <Table />
              </div>
    
           </div>
       </div>
    </div>
        </div>
      )
}

export default StockPage