import React,{useState} from 'react'
import { Navigate } from 'react-router';
import fieldCard from '../../../asset/fieldCard.svg'
import see_field from '../../../asset/see_field.svg'


export default function FieldCard({field}){
    const [navigate,setNavigate]=useState(false);
    const  toggleNavigation = ()=> {
        setNavigate(!navigate)
    }
    return (
        <>
        <div className='my-3 px-4 bg-white py-3 rounded-lg flex flex-col'>
            <div className='flex justify-between py-4'> 
                <div className='flex'>  
                    <img  src={fieldCard}></img>
                    <div className='px-5'>
                            <p>{field.name}</p>
                            <p>Current GDD - 379</p>
                    </div>
                </div> 
                <button onClick={toggleNavigation}> <img  src={see_field}></img></button>   
            </div>
            <p>Your Optimal Cutting Period is in 3 days</p>
        </div>
        {navigate&& (<Navigate to="/field" />)}  
       </> 
    )
}

