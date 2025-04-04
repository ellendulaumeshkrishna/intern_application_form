import * as React from "react";
import { Controller } from "react-hook-form";
import { TextField, Box, Typography } from "@mui/material";

export default function MyFileUpload(props) {
  const { label, name, control, width } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Box sx={{ width: width }}>
          <Typography sx={{ fontWeight: "bold", mb: 1 }}>{label}</Typography>
          <TextField
            type="file"
            fullWidth
            inputProps={{ accept: ".pdf,.doc,.docx" }}
            onChange={(e) => onChange(e.target.files)}  
            sx={{
              "& input": { padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "5px" },
            }}
          />
          {value?.length > 0 && ( 
            <Typography variant="body2" sx={{ mt: 1, color: "gray" }}>
              Selected: {value[0].name}
            </Typography>
          )}
          {error && <Typography color="error" variant="caption">{error.message}</Typography>}
        </Box>
      )}
    />
  );
}
