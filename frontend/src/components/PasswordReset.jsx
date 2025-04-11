import '../App.css'
import {React, useState} from 'react'
import { useParams } from 'react-router-dom'
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


const PasswordReset   = () => {
    const {handleSubmit,control}=useForm()
    const navigate = useNavigate();
    const [ShowMessage , setShowMessage] = useState(false)
    const {token}=useParams()
    console.log(token)

    const submission = (data) => {
        userAxios.post('http://127.0.0.1:8000/api/password_reset/confirm/', {
            password: data.password,
            token : token,
        })
        .then((response)=>{
            setShowMessage(true)
            setTimeout(()=>{
                navigate('/')
            }, 2000  )
        })
        
    }

  return (
        <div className={"myBackground"}> 

{ShowMessage && (<MyMessage text={"Your password reset was successfull, you will be directed to login in few seconds"} color={'#69C9AB'}    />)  }

                <form
                    onSubmit={handleSubmit(submission)}>

              
                    <Box  className={"whiteBox"} >
                        <Box className={"itemBox"}>
                            <Box className={"title"}  >
                                Reset Password
                            </Box>
                        </Box>
        
                        <Box className={"itemBox"}>
                            <MyPassField
                                label={"Password"}
                                name={"password"}
                                control={control}
                            />
                        </Box>

                        <Box className={"itemBox"}>
                            <MyPassField
                                label={"Confirm Password"}
                                name={"password2"}
                                control={control}
                            />
                        </Box>
        
        
                        <Box className={"itemBox"}>
                            <MyButton
                                label={"Reset password"}
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

export default PasswordReset