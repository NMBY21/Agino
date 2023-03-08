import React, {useState} from 'react'
import InputField from '../../../components/InputField/inputField.component';
import Button from '../../../components/Button/button.componet'
import {useNavigate } from "react-router-dom";

import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import {create} from '../../../api/farm.api'

import {
    RecaptchaVerifier,
    signInWithPhoneNumber,
  } from "firebase/auth";

  import { auth } from "./firebase";


export default function SignupForm(){
    const [country,setCountry]=useState("Ethiopia");
    const [phone,setPhone]=useState("");
    const [result, setResult] = useState("");
    const [otp, setOtp] = useState("");
    const [flag, setFlag] = useState(false);


    const navigate = useNavigate();

    const handleOtpChange = event => { 
        const {value} = event.target
        setOtp(value)
    }
    const handlePhoneChange = event => { 
        const {value} = event.target
        setPhone(value)
    }
    function setUpRecaptha(number) {
        const recaptchaVerifier = new RecaptchaVerifier(
          "recaptcha-container",
          {},
          auth
        );
        recaptchaVerifier.render();
        return signInWithPhoneNumber(auth, number, recaptchaVerifier);
      }

    const getOtp = async (e) => {
        e.preventDefault();
        console.log(phone);
        if (phone === "" || phone === undefined)
          return
        try {
          const response = await setUpRecaptha(phone);
          console.log(response)
          setResult(response);
          setFlag(true);
        } catch (err) {
            console.log(err.message)
        }
      };

      const verifyOtp = async (e) => {
        e.preventDefault();
        if (otp === "" || otp === null) return;
        try {
          const d = await result.confirm(otp);
          console.log(d)
          navigate("/");
        } catch (err) {
            console.log(err.message);
        }
      };
        
    return (
        <>
        {
            flag?( 
            <div className='bg-gray-50 bg-g lg:mx-60 px-6 mt-0 pt-12'>
                <form>
                    <InputField label = "otp"  onChange={handleOtpChange} name='otp' value={otp} required/>    
                    <Button onClick={verifyOtp} text = "verify"/>
                </form>
            </div>  ):(
                <div className='bg-gray-50 bg-g lg:mx-60 px-6 mt-0 pt-12'>
                    <form>
                    {/* <PhoneInput
                        international
                        defaultCountry="RU"
                        value={country}
                        onChange={setCountry
                    }/> */}
                        {/* <InputField label = "country" onChange={handleCountryChange} name='country'     value={country}     required/> */}
                        <InputField label = "phone"  onChange={handlePhoneChange} name='phone' value={phone} required/>    
                        <div id="recaptcha-container"></div>
                        <Button onClick={getOtp} text = "create new farm"/>
                    </form>
                </div>)
        }
        
        </>
    )
}
