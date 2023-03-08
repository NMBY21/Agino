import React, {useState} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 

const CustomCalendar = () => { 

const [value, setValue] = useState({ 

          startDate: null,
          endDate: null 
        }); 

      const handleValueChange = (newValue) => {
      console.log("newValue:", newValue); 
      setValue(newValue); 

      } 

    return (
              <Datepicker 
                    primaryColor={'teal'}
                    value={value} 
                    onChange={handleValueChange} 
                    showShortcuts={true} 
              /> 

        );
}; 


export default CustomCalendar;