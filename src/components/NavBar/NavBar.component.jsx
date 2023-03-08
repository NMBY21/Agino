import React, {useState} from 'react'
import { Navigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import Drop from './../Drop/grop.component'
import Frop from '../Drop/Frop.component';
import SensorForm from '../../pages/Form/SensorForm/sensorForm.component'
import FarmForm from '../../pages/Form/FarmForm/farmForm.pages'
import FieldForm from '../../pages/Form/FieldForm/fieldForm.component';

export default function NavBar() {

  const [showAddNewSensor, setShowAddNewSensor] = useState(false);
  const [showAddNewField, setShowAddNewField] = useState(false);
  const [showAddNewFarm, setShowAddNewFarm] = useState(false);

  const [showProfile, setShowProfile] = useState(false);
  const [showHelp, setHelp] = useState(false);
  const [showSignout, setShowSignout] = useState(false);


  const choiceProfile = [  {
    name:"Profile",
    link:"/help"
  },
  {
      name:"Help",
      link:"/help"
  }, 
  {
      name:"Sign out",
      link:"/help"
    }
]


    const addNewSensor = ()=> { 
          setShowAddNewSensor(!showAddNewSensor)
          
      }
    const addNewField = () => { 
          setShowAddNewField(!showAddNewField)
      }
      const addNewFarm = () => { 
          setShowAddNewFarm(!showAddNewFarm)
    }

  // const choiceplus = [  {
  //       name:"Add New Sensor",
  //       onclick:addNewSensor
        
  //     },
  //     {
  //         name:"Add New Field",
  //         onclick:addNewField
          
  //     }, 
  //     {
  //         name:"Add New Farm",
  //         onclick:addNewFarm
  //       }
  //   ]

  const choiceplus = [  {
    name:"Add New Sensor",
    link:"/farmForm"
    
  },
  {
      name:"Add New Field",
      link:"/fieldForm"
      
  }, 
  {
      name:"Add New Farm",
      link:"/sensorForm"
    }
]


  return (
    <>
    <nav className="w-full bg-green-900 shadow">
      <div className="justify-between md:items-center md:flex px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block text-green">
          <a href="/" className="no-underline">
            <h2 className="text-2xl font-bold text-green-400 object-left-top">
              agino
            </h2>
          </a> 
        </div>
        <div className="hidden space-x-4 md:inline-block">
          <div className='flex justify-evenly'>
            <div className='mx-2'>
              <Frop choice ={choiceProfile} icon = { <PersonIcon style={{color: 'white'}}/>}/>
            </div>
            <div className='mx-2'>
              <Frop choice ={choiceplus} icon = { <AddIcon style={{color: 'white'}}/>}/>
            </div>
          </div>
          
        </div>
      </div>
    </nav>

    {
          showAddNewSensor &&(<>
            <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">

             <SensorForm setClose = {setShowAddNewSensor}/>
              
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>)
          }


    {
        showAddNewField &&(<>
            <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">

             <FieldForm setClose = {setShowAddNewField}/>
              
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>)
          }


{
        showAddNewFarm &&(<>
            <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">

             <FarmForm setClose = {setShowAddNewFarm}/>
              
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>)
          }
    </>
  );
}