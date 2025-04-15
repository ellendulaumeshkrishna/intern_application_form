// import * as React from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import { Controller } from 'react-hook-form';

// export default function MySelectField(props) {
//   const{label,name, width,control,options}=props
 

 

//   return (
    
//       <FormControl fvariant="standard" sx={{width:{width}}}>
//       <InputLabel id="demo-simple-select-label">{label}</InputLabel>
//       <Controller
//         name={name}
//         control={control}
//         render={({
//           field:{onChange, value},
//           fieldState:{error},
//           formState,

//         })=>(
//           <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
          
//           onChange={onChange}
//           value={value}
//         >
//           {options.map((options,index)=>(
//             <MenuItem key={index} value={options.value}>
//               {options.label}
//             </MenuItem>
//           ))}
//         </Select>
//         )}
//         />
//       {/* </Controller>  */}
       
//       </FormControl>
    
//   );
// }


import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Controller } from 'react-hook-form';

export default function MySelectField(props) {
  const { label, name, width, control, options } = props;

  const labelId = `${name}-label`;   // unique label ID for accessibility and correct floating

  return (
    <FormControl fvariant="standard" sx={{ width: width }}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select
            labelId={labelId}
            id={`${name}-select`}
            value={value}
            onChange={onChange}
            label={label}  // <-- this is important for the floating label to behave correctly!
          >
            {options.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );
}
