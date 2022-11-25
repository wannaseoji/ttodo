import { TextField, styled } from '@mui/material';

const StyledTextField = styled(TextField)({
    "&:hover .MuiInput-underline": {
        borderBottomColor: "gray"
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "#FF9AB5"
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "white"
        },
        "&:hover fieldset": {
            borderColor: "white",
            borderBottomColor: "white",
            borderWidth: 2
        },
        "&.Mui-focused fieldset": {
            borderColor: "white"
        }
    }
});

const CustomTextField = (props) => {
    const {id, variant, onChange} = props
    return(
        <StyledTextField sx={{ width: "80%" }} id={id} variant={variant} onChange={onChange}/>
    )
}

export default CustomTextField;
