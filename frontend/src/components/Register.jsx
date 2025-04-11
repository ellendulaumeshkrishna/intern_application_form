import '../App.css'
import {Box} from '@mui/material'
import BasicTextField from './forms/MyOutlineTextField' 
// import MyTextField from './forms/MyTextField'
import MyPassField from './forms/MyPassField'
import MyButton from './forms/MyButton'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import userAxios from './UserAxios'
import {useNavigate} from 'react-router-dom'
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"


const Register = () =>{
    const navigate=useNavigate()
    
    const schema = yup
    .object({
        email:yup.string().email('Field expects an email address').required('Email is a required field'),
        password:yup.string()
                    .required('Password is a required field')
                    .min(8,'Password must be atleast 8 charecters')
                    .matches(/[A-Z]/,'Password must contain atleast one uppercase letter')
                    .matches(/[a-z]/,'Password must contain atleast one lowercase letter')
                    .matches(/[0-9]/,'Password must contain atleast one number')
                    .matches(/[!@#$%^&*()<>?":;{}|<>+-]/,'Password must contain atleast one special character'),
        password2:yup.string()
                    .required('Password confirmation is a required field')
                    .oneOf([yup.ref('password'),null],'Passwords must match')
                    
    })

    const {handleSubmit , control } = useForm({resolver:yupResolver(schema)})

    const submission = (data) => {
        userAxios.post(`register/`,{
            email: data.email,
            password : data.password,
        })

        .then(()=>{
            navigate(`/`)
        }
        )
    } 

    return(
        <div className={"myBackground"}> 
            <form
                onSubmit={handleSubmit(submission)}>
                
            
            <Box  className={"whiteBox"} >
                <Box className={"itemBox"}>
                    <Box className={"title"}  >
                        User Registration
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
                    <MyPassField
                        label={"Confirm Password"}
                        name={"password2"}
                        control={control}
                    />
                </Box>

                <Box className={"itemBox"}>
                    <MyButton
                        type={"submit"}
                        label={"Register"}
                    
                    />
                </Box>

                <Box className={"itemBox"}>
                    <Link to="/">
                        Already had an account? Please Login!
                    </Link>
                </Box>

            </Box>
            </form>
        </div>
    )
}

export default Register