import React, {useState} from 'react'
import Header from '../../components/NavBar/Header.component';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '../../components/Button/button.componet';
import { isDisabled } from '@testing-library/user-event/dist/utils';

export default function  TermsAndConditions(){

    const [agree, setAgree] = useState(false)

    const changeAgreeState = () => {
        setAgree( prevAgree => !prevAgree)
        console.log(agree)
    }

    const acceptTermsAndConditions = () => {
        console.log('Terms and Conditions are Accepted')
    }
    return(
        <div>
            <div className='bg-gray-50 lg:mx-60 sm:mx-80 md:mx-10 h-screen'>
            <Header/>
            <div className='px-12 py-10'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Fugit iure odio eos saepe dolorum magni. Natus doloremque nobis, provident earum nesciunt, 
                    accusamus vitae, veritatis suscipit incidunt magnam assumenda tempora illo.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus veniam unde mollitia, 
                    illo nisi deleniti tempore at voluptates iure eius fugiat non, veritatis consequuntur vitae nam ducimus. 
                    Nemo, dolores veniam?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus illum incidunt, 
                    sequi molestias eum molestiae aut praesentium voluptatum quaerat. Cum autem rerum 
                    dolor necessitatibus laborum? Ducimus ipsam quam sint ut!</p>
            </div>
            <div className='px-12'>
                <div class="flex items-center" onClick={changeAgreeState}>
                    <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
                </div>
                <button 
                    className="mt-6 flex w-full items-center justify-center rounded-lg border border-transparent bg-green-900 py-3 px-8 text-base leading-4 font-['Roboto'] font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    // disabled={true}
                    onClick={acceptTermsAndConditions}
                    >
                    AGREE TO TERMS AND CONDITIONS
                </button>
            </div>
            </div>
        </div>
        
    )  
}
