import React from 'react'

export default function InputField({onChange,label, name, value,icon, ...otherPropes}){
    return (
      <div>
          <label className="block font-['Roboto'] font-normal text-xs not-italic leading-4">{label}</label>

          <div className="relative mt-1 rounded-lg shadow-sm">
              <input
                name={name}
                value = {value}
                onChange = {onChange}
                {...otherPropes}
                className=" text-gray-900 bg-white  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
              {
              icon&& <div className="absolute inset-y-0 right-0 flex items-center">
                      <img src={icon} className="rounded-md  border-transparent bg-transparent py-0 pl-1 pr-4"/>
                    </div>

              }
          
          </div>
      </div>
    )
  }
  
