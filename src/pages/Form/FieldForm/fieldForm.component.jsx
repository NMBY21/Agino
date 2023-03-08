import React, {useState} from 'react'
import InputField from '../../../components/InputField/inputField.component';
import Button from '../../../components/Button/button.componet'
import {create} from '../../../api/farm.api'
import { Navigate } from 'react-router';

import CloseIcon from '@mui/icons-material/Close';

export default function FieldForm({setClose}){

    const [navigate,setNavigate]=useState(false);
    const  toogleNavigate= ()=> {
        setNavigate(!navigate)
    }

    const [name,setName]=useState("");
    const [altitude,setAltitude]=useState("");
   
    const handleNameChange = event => { 
        const {value} = event.target
        setName(value)
    }
    const handleAltitudeChange = event => { 
        const {value} = event.target
        setAltitude(value)
    }
    const handleSubmit= event => { 
        event.preventDefault()
        const field = {
            name: name || undefined,
            altitude: altitude || undefined
        }
        create(field).then((data) => {
            console.log(data)
        })
        setClose?setClose(false):toogleNavigate()
    }
        
    return (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">

              {/*content*/}
              <div className="border-0 h-fit rounded-lg shadow-lg relative flex flex-col w-full lg:min-w-[450px] sm:mx-4 sm:min-w-full bg-gray-50 outline-none focus:outline-none">
                    <div className='flex justify-between my-4 px-3'>
                      <p className="font-['Roboto'] font-medium text-2xl not-italic leading-7">New Field</p>
                      <button ><CloseIcon/></button>
                    </div>
                    <div>
                        <form>
                            <div className='mb-4 px-3'>
                                <InputField label = "Farm Name" onChange={handleNameChange} name='name'     value={name}     required/>                          </div>
                            <div className='mb-4 px-3'>
                                <InputField label = "Location"  onChange={handleAltitudeChange} name='altitude' value={altitude} required/>    
                            </div>
                            
                          <div className='pb-3 mx-0 mt-36 px-3 border shadow-md'>
                            <Button onClick={handleSubmit} text = "Create New Field"/>
                          </div>
                        </form>
                    </div>
              </div>
              
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          
          {navigate&& (<Navigate to="/sensorLanding" />)}
    </>
  );
}