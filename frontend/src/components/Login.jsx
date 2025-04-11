import '../App.css'
import {React,useState} from 'react'
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


const Login = () =>{
    const {handleSubmit,control}=useForm()
    const navigate = useNavigate();
    const [ShowMessage , setShowMessage] = useState(false)


    const submission = (data) => {
        userAxios.post(`login/`,{
            email: data.email,
            password : data.password,
        })

        .then((response)=>{
            console.log(response)
            localStorage.setItem('Token',response.data.token)
            navigate(`/home`)
        })
        .catch((error)=>{
            setShowMessage(true)
            console.error('Error during login', error)
        })
    }

    return(
        <div className={"myBackground"}> 
        {ShowMessage && (<MyMessage text={"Login has failed, Please try again or reset your password"} color={'#EC5A76'}   />)  }

        <form
            onSubmit={handleSubmit(submission)}>
      
            <Box  className={"whiteBox"} >
                <Box className={"itemBox"}>
                    <Box className={"title"}  >
                        Login for the portal
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
                    <MyPassField
                        label={"Password"}
                        name={"password"}
                        control={control}
                    />
                </Box>

                <Box className={"itemBox"}>
                    <MyButton
                        label={"login"}
                        type={"submit"}
                        // onClick={() => console.log("Button clicked")}
                    />
                </Box>

                <Box className={"itemBox"} sx={{flexDirection:'column'}}  >
                    <Link to="/register">
                        No account yet! Please Register
                    </Link>
                    <Link to="/request/password_reset">
                        Forgot password?
                    </Link>
                </Box>

            </Box>
        </form>
            
        </div>
    )
}

export default Login