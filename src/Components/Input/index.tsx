// prettier-ignore
'use client';
import { TextField } from "@mui/material";

type CustomInputProps = {
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
};

export default function CustomInput({
  placeholder,
  value,
  onChange,
}: CustomInputProps) {
  return (
    <TextField
      variant="outlined"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      fullWidth
      sx={{
        backgroundColor: "white",
        borderRadius: 1,
        "& .MuiOutlinedInput-root": {
          borderRadius: 1,
        },
      }}
    />
  );
}
