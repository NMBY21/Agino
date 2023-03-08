import React, {useState} from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function FAQCard({faq}){
    const [showAnswer, setShowAnswer] = useState(false);

    const toggleShowAnswer = event => { 
        setShowAnswer(!showAnswer)
    }

    return (
        <div className='border-l-rose-50 rounded-lg rounded-3xl'>
            <div className='flex justify-between mx-3 bg-white p-3'>
                <p>{faq.question}</p>
                <button onClick={toggleShowAnswer}><KeyboardArrowDownIcon/></button>
            </div> 
            <div className='mx-3 bg-white mb-2 pt-1 px-4'>
                {
                    showAnswer&&( <p className='pb-2' >{faq.ansower}</p>)
                }
            </div>    
        </div>
        
    )
}

