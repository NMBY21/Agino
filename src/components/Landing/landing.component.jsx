import React from 'react'


export default function Landing({image, title,paragraph, btn_text, btn_action}){
    return (
            <div className='bg-gray-50 bg-g lg:mx-60 px-6 h-screen'>
            <div className = "h-[36rem] flex flex-col justify-center items-center ">
                <img className = "w-28 h-28 rounded-full" src={image} alt= ""/>
                <h1 className ="Roboto text-[34px] pt-5 font-bold text-[#20382F]">{title}</h1>
                <p className = "text-right md:text-center pt-2 pb-9 w-80">{paragraph}</p>
                <button onClick={btn_action} className = "bg-[#275342] hover:bg-[#14532d] w-80 text-white font-bold py-2 px-12 rounded">
                        {btn_text}
                </button>
            </div>
        </div>
        
    )
}
