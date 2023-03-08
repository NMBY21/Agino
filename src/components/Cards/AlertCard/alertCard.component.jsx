import React from 'react'
import alert_image from '../../../asset/alert.svg'

export default function AlertCard({alert}){
    return (
        <div className="flex my-3 px-4 bg-white py-4 rounded">
            <img className='mr-4' src={alert_image}></img>
            <div>
                <p>{alert.message}</p>
                <p>{alert.date}</p>
            </div> 
        </div>
        
    )
}

