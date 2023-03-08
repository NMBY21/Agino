import React, {useState} from 'react'
import Drop from './../Drop/grop.component'
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'

export default function Header ({name, back, choice}) {

  return (

    <div className='w-full justify-center bg-slate-100 shadow'>
      <div className='justify-between md:items-center md:flex lg:mx-60 px-6'>
        <div className='flex flex-row items-center justify-between md:py-3'>
          <Link to={back}>
            <ArrowBackIosIcon />
          </Link>
          <p className='text-gray-700 '>{name} </p>
        </div>
        <div className='hidden space-x-4 md:inline-block'>
          <Drop choice ={choice} icon = {<MoreVertOutlinedIcon />}/>
          {/* <MoreVertOutlinedIcon /> */}
        </div>
      </div>
    </div>
  )
}