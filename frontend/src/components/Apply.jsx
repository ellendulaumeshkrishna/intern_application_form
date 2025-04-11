import React from 'react'
import {Box, Button, Typography } from '@mui/material'
import MyTextField  from './forms/MyTextField'
import { useForm } from 'react-hook-form';
import MyDatePickerField from './forms/MyDatePickerField';
import MySelectField from './forms/MySelectField';
import { useNavigate } from 'react-router-dom';
import MyFileUpload from './forms/MyFileUpload';
import AxiosInstance from './Axios';
import Dayjs from 'dayjs'


const Apply = () => {
  
  const navigate=useNavigate()
  const defaultValues={
    name:'',
    email:'',
    phone_number:'',
    dob:null,
    gender:'Male',
    college_name:'',
    current_degree:'B.Tech',
    department:'',
    cgpa:'',
    resume:null,
    lor:null,
  };

  const {handleSubmit,reset,setValue,control,watch}=useForm({defaultValues})
  const submission = (data) => 
    {

    const DOB = data.dob ? Dayjs(data.dob).format("YYYY-MM-DD") : "";


    // AxiosInstance.post(
    //   `registerform/`,{
    //     name: data.name,
    //     email : data.email,
    //     phone_number : data.phone_number ,
    //     dob : DOB,
    //     gender : data.gender,
    //     college_name : data.college_name,
    //     current_degree : data.current_degree,
    //     department : data.department,
    //     cgpa: data.cgpa,
    //     resume: data.resume,
    //     lor: data.lor,
                
        
        
    //   }
    // )

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone_number", data.phone_number);
    formData.append("dob", DOB);
    formData.append("gender", data.gender);
    formData.append("college_name", data.college_name);
    formData.append("current_degree", data.current_degree);
    formData.append("department", data.department);
    formData.append("cgpa", parseFloat(data.cgpa) || 0);

    const resumeFile = data.resume && data.resume.length > 0 ? data.resume[0] : null;
    const lorFile = data.lor && data.lor.length > 0 ? data.lor[0] : null;

    if (resumeFile) {
      formData.append("resume", resumeFile);
    }
    if (lorFile) {
      formData.append("lor", lorFile);
    }

    // for (let pair of formData.entries()) {
    //   console.log(pair[0], pair[1]); 
    // }
  

    AxiosInstance.post('registerform/', formData,{
      headers: {
        "Content-Type": "multipart/form-data", 
      },
    })
  
    
      
      .then((response)=>{
        console.log("Success:", response.data);  
        navigate(`/`)
      })
      .catch((error) => {
        console.error("Error:", error.response?.data || error.message);
      });
  };






  
  return (
    <div>
      <form onSubmit={handleSubmit(submission)} >
      <Box sx={{display:'flex' , width:'100%' , backgroundColor:'#00003f',
        marginBottom:'10px'
      }} >
        <Typography sx={{marginLeft:'20px', color:'#fff'}}  >
          Apply for an Internship
        </Typography>
      </Box>

      <Box sx={{display:'flex' , width:'100%' ,boxShadow:3,padding:4,flexDirection:'column'
      }}   >
         <Typography variant="h6" sx={{marginBottom:'20px', fontWeight: 'bold', textAlign: 'left' }} >
            Personal Information
          </Typography>
        <Box  sx={{display:'flex' , justifyContent:'space-around', marginBottom: '20px'}} >
          <MyTextField
            label="Name"
            name="name"
            control={control}
            placeholder="Enter your name"
            width={'40%'}
          />

          <MyTextField
            label="Email Address"
            name="email"
            control={control}
            placeholder="Enter your email"
            width={'40%'}
          />
        </Box>

        <Box  sx={{display:'flex' , justifyContent:'space-around',marginBottom: '20px'}} >
          <MyTextField
            label="Phone Number"
            name="phone_number"
            control={control}
            placeholder="Enter your phone number"
            width={'30%'}
          />

          <MyDatePickerField
          label="Date of Birth"
          name="dob"
          control={control}
          width={'30%'}
          />

          <MySelectField
          label="Gender"
          name="gender"
          control={control}
          width={'30%'}
          defaultValues="Male"
          options={[
            {label:'Male',value:'Male'},
            {label:'Female',value:'Female'},
            {label:'Other',value:'Other'},
          ]}
          />
          
        </Box>
   </Box>

{/* NEXT BLOCK */}
   <Box sx={{display:'flex' , width:'100%' ,boxShadow:3,padding:4,flexDirection:'column',marginTop:'20px'
      }}   >
         <Typography variant="h6" sx={{marginBottom:'20px', fontWeight: 'bold', textAlign: 'left' }} >
            Academic Information
          </Typography>
        <Box  sx={{display:'flex' , justifyContent:'space-around', marginBottom: '20px'}} >
          <MyTextField
            label="College Name"
            name="college_name"
            control={control}
            placeholder="Enter your College name"
            width={'30%'}
          />

        <MySelectField
          label="Current Degree"
          name="current_degree"
          control={control}
          width={'30%'}
          defaultValues="B.Tech"
          options={[
            { label: 'B.Tech', value: 'B.Tech' },
            { label: 'M.Tech', value: 'M.Tech' },
            { label: 'PhD', value: 'PhD' },
            { label: 'Other', value: 'Other' }
          ]}
        />
          

          

        </Box>

        <Box  sx={{display:'flex' , justifyContent:'space-around',marginBottom: '20px'}} >
          
          <MyTextField
             label="Department"
             name="department"
             control={control}
             placeholder="Enter your department"
             width={'30%'}
          />
        


          <MyTextField
            label="CGPA"
            name="cgpa"
            control={control}
            placeholder="Enter your CGPA"
            width={'30%'}
          />
        </Box>
    
      </Box>

{/* next file upload box */}
      <Box sx={{display:'flex' , width:'100%' ,boxShadow:3,padding:4,flexDirection:'column',marginTop:'20px'
      }}   >
         <Typography variant="h6" sx={{marginBottom:'20px', fontWeight: 'bold', textAlign: 'left' }} >
            Documents
          </Typography>
        <Box  sx={{display:'flex' , justifyContent:'space-around', marginBottom: '20px'}} >
                      
          <MyFileUpload
              label="Attach your Resume"
              name="resume"
              control={control}
              width="40%"
          />

          <MyFileUpload
              label="Attach your LOR (Optional)"
              name="lor"
              control={control}
              width="40%"
          />
          

        </Box>

        <Box  sx={{display:'flex' , justifyContent:'space-around',marginBottom: '20px'}} >
          
        
        </Box>
    
      </Box>

           

      <Box>
        <Button variant="contained" type="submit" sx={{width:'15%' , height:'40px'}} >Submit</Button>
      </Box>

      </form>
    </div>
  );
};

export default Apply


