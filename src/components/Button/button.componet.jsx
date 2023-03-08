import React from 'react'


export default function Button({onClick, text}){
    return (
        <div>
            <button
                type="button" 
                className="mt-6 flex w-full items-center justify-center rounded-lg border border-transparent bg-green-900 py-3 px-8 text-base leading-4 font-['Roboto'] font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick = {onClick}>{text}</button>
        </div>
        
    )
}

