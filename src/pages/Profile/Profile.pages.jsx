import React, {useState, useEffect} from 'react'
import Header from '../../components/NavBar/Header.component';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function  Profile(){
    // const [faqs,setData]=useState();
    // useEffect(()=>{
    //     faqsList().then(faq =>setData(faq))
    //   },[])

    const showTermsandConditions = () => {
        console.log('Terms and Conditions')
    }
    return(
        <div>
            <Header/>
            <div className='bg-gray-50 lg:mx-60 sm:mx-80 md:mx-10 h-screen'>
            <div>
                <p className='mx-3 pt-2'>Phone</p>
                <div className='mx-3 bg-white p-2 mb-5'>
                    <p>+2519675438970</p>
                </div> 
                <div className='flex justify-between mx-3 bg-white p-3' onClick={showTermsandConditions}>
                    <p>Terms and Conditions</p>
                    <button><a href='/termsandconditions'><ArrowForwardIosIcon/></a></button>
                </div>
            </div>
            </div>
        </div>
        
    )
    
}
