import React, {useState, useEffect} from 'react'
import {faqsList} from '../../api/farm.api'
import FAQCard from '../../components/Cards/FAQCard/fqaCard.componet';

export default function  Help(){
    const [faqs,setData]=useState();
    const d =0
    useEffect(()=>{
        faqsList().then(faq =>setData(faq))
      },[d])
    return(
        <div className='bg-gray-50 lg:mx-60 sm:mx-80 md:mx-10'>
            <div className='pt-10 mx-3'>
                <h1 className= "font-['Roboto'] font-bold text-base not-italic leading-6 mb-3">FAQ</h1>
            </div>

            {   faqs&&faqs.map((faq,index ) =>( 
                    <div key={index} >
                        <FAQCard faq ={faq} />
                    </div>  
                    ))
            }

        </div>
    )
    
}
