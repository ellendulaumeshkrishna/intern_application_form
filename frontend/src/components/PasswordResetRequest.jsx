import '../App.css'
import {React, useEffect, useMemo, useState} from 'react'
import {Box} from '@mui/material'
import BasicTextField from './forms/MyOutlineTextField' 
// import MyTextField from './forms/MyTextField'
import MyPassField from './forms/MyPassField'
import MyButton from './forms/MyButton'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import userAxios from './UserAxios'
import {useNavigate} from 'react-router-dom'
import MyMessage from './Message'


const PasswordResetRequest = () => {
    const {handleSubmit,control}=useForm()
    const navigate = useNavigate();
    const [ShowMessage , setShowMessage] = useState(false)


    const submission = (data) => {
        // userAxios.post(`api/password_reset`,{
        //     email: data.email,
        //     password : data.password,
        // })
        userAxios.post('http://127.0.0.1:8000/api/password_reset/', {
            email: data.email,
        })
        .then((response)=>{
            setShowMessage(true)
            setTimeout(()=>{
                navigate('/')
            },6000)
        })
        
    }

  return (
        <div className={"myBackground"}> 

{ShowMessage && (<MyMessage text={"If your email exists you have received an email with instructions for reset"}     color={'#69C9AB'} />)  }

                <form
                    onSubmit={handleSubmit(submission)}>

              
                    <Box  className={"whiteBox"} >
                        <Box className={"itemBox"}>
                            <Box className={"title"}  >
                                Request Password Reset
                            </Box>
                        </Box>
        
                        <Box className={"itemBox"}>
                            <BasicTextField
                                label ={"Email"}
                                name={"email"}
                                control={control}
                            />
                        </Box>
        
        
                        <Box className={"itemBox"}>
                            <MyButton
                                label={"Request password reset"}
                                type={"submit"}
                                // onClick={() => console.log("Button clicked")}
                            />
                        </Box>
        
                        <Box className={"itemBox"} sx={{flexDirection:'column'}}  >
                            
                        </Box>
        
                    </Box>
                </form>
                    
                </div>
  )
}

export default PasswordResetRequest