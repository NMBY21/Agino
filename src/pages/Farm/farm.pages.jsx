import React, {useState, useEffect} from 'react'
import {farms} from '../../api/farm.api'
import AlertCard from '../../components/Cards/AlertCard/alertCard.component'
import FieldCard from '../../components/Cards/FieldCard/fieldCard.component'
import add from '../../asset/add.svg'
import farm_page from '../../asset/farm-page.svg'
import FarmListbox from '../../components/Listbox/listbox.component'
import Drop from '../../components/Drop/grop.component'
import ResetGDDForm from '../Form/FarmForm/farmForm.pages'

export default function  Farm(){
    const [showResetGDDForm, setShowResetGDDForm] = useState(false);
    const toggleShowResetGDDForm = ()=> { 
        setShowResetGDDForm(!showResetGDDForm)
    }

    const [farm,setData]=useState();
    const [selectedFarm, setSelectedFarm] = useState()
    const clicked  = () => { 
        console.log("clicked")
    }
    const choice = [  {
        name:"Edit Farm",
        onClick:clicked
    },
    {
        name:"Delete Farm",
        onClick:clicked
    }
  ]
    useEffect(()=>{
        farms().then(farm =>{
            setData(farm)
            setSelectedFarm(farm[0])
        })
      },[])
    return(
        <>
        <div className='bg-gray-50 bg-g lg:mx-80 px-6'>
            <div className='flex justify-between'>

                <div className='flex justify-between w-1/4 mt-5'>
                    <img src={farm_page}></img>
                    {
                    (farm&&selectedFarm)&&<FarmListbox className = "bg-white" farm = {farm} selectedFarm = {selectedFarm} setSelectedFarm = {setSelectedFarm} />
                    } 
                </div>
                <Drop choice = {choice}/>
            </div>

            
            <h1 className='font-bold'>Alerts</h1>
               
            {   selectedFarm&&selectedFarm.alerts.map((alert,index ) =>( 
                    <div key={index}>
                        <AlertCard alert = {alert}/>
                    </div>  
                    ))
            }

            <div className='flex justify-between mt-6'>
                <h1 className='font-bold'>Fields</h1>
                <button onClick={toggleShowResetGDDForm}><img  src={add}></img></button>
            </div>

            {   selectedFarm&&selectedFarm.fields.map((field,index ) =>( 
                    <div key={index}>
                        <FieldCard field = {field}/>
                    </div>  
                    ))
            }
            </div>
            {
          showResetGDDForm ? (<ResetGDDForm toggleShowResetGDDForm = {toggleShowResetGDDForm}/>) : null}
            </>
    )
    
}
