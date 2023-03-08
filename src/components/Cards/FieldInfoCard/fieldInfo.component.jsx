import React from 'react'



export default function FieldInfoCard(props){
    return (
        
        <div className='md:container md:mx-auto bg-white h-36 rounded-lg'>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col  p-10'>
              <p className='text-4xl text-center text-gray-500'>367</p>
              <p className='text-gray-500 '> Current GDD </p>
            </div>
            <div className='flex flex-col p-10'>
              <p className='text-4xl text-center text-gray-500'>367</p>
              <p className='text-gray-500 '> Current GDD </p>
            </div>
            <div className='flex flex-col p-10'>
              <p className='text-4xl text-center text-gray-500'>367</p>
              <p className='text-gray-500 '> 5 days </p>
            </div>
          </div>
        </div>
        // <div className=' mx-4 flex h-22 py-5 bg-white justify-evenly rounded'>
        //     <div>
        //         <p className='font-medium'>367</p>
        //         <p>Current GDD</p>
        //     </div>
        //     <div>
        //         <p>475</p>
        //         <p>Goal GDD</p>
        //     </div>
        //     <div>
        //         <p>{5+"days"}</p>
        //         <p>To cutting </p>
        //     </div>  
        // </div>
        
    )
}

