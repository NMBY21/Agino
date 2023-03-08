import React, {useState} from 'react'
import InputField from '../../../components/InputField/inputField.component';
import Button from '../../../components/Button/button.componet'
import {create} from '../../../api/farm.api'
import calander from  '../../../asset/calander.svg'

export default function ResetGDDForm({toggleShowResetGDDForm}) {
  const [GDD,setGDD]=useState("");

  const handleGDDChange = event => { 
      const {value} = event.target
      setGDD(value)
  }

  const handleSubmit= event => { 
      event.preventDefault()
      const sensor= {
          GDD:GDD || undefined,
      }
      create(sensor).then((data) => {
          console.log(data)
      })
  }
  return (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full min-w-[450px] bg-gray-50 outline-none focus:outline-none">
                
                {/*header*/}
                <div className="flex items-start justify-between p-3">
                  <p className="font-semibold">Reset GDD</p>
                  <p>x</p>
                </div>

                {/*body*/}
                <div className="relative p-6 flex-auto">
                    <form>
                        <InputField 
                            label = "Default GGD"  
                            onChange={handleGDDChange} 
                            name='GDD' 
                            value={GDD}
                            icon ={calander}
                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
                            required
                        />
                    </form>
                </div>

                {/*footer*/}
                <div className="p-3">
                  <Button
                    text={"Reset GDD"}
                    onClick={toggleShowResetGDDForm}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}