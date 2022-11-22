import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const DateToYYYYMMDD = (date) => {
  var year = date.getFullYear();
  var month = ("0" + (1 + date.getMonth())).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);

  return year + "-" + month + "-" + day;
}

export default function TaskDatePicker({changeSelectedDate=f=>f, initSelectedDate}) {
  // console.log(initSelectedDate)
  const [selectedDate, setSelectedDate] = React.useState(DateToYYYYMMDD(initSelectedDate));

  React.useEffect(
    () => {
      changeSelectedDate(selectedDate)
    }
  )

  const color = "#FF9AB5"
  const theme = createTheme({
    components: {
      MuiInputBase:{
        styleOverrides:{
          root:{
            height:"40px"
          }
        }
      },
      MuiIconButton: {
        styleOverrides: {
          sizeMedium: {
            color
          }
        }
      }
    }
  });

  const popperSx = {
    "& .MuiPickersDay-root.Mui-selected":{
      backgroundColor:"#FF9AB5",
      "&:hover":{
        backgroundColor:"#FF9AB5"
      }
    },
    "& .MuiPickersDay-root":{
      "&:focus":{
        backgroundColor:"#FF9AB5",
        "&.Mui-selected":{
          backgroundColor:"#FF9AB5"
        }
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
    <LocalizationProvider dateAdapter={AdapterDayjs}  >
        <DesktopDatePicker 
          PopperProps={{sx: popperSx}}
          inputFormat="YYYY/MM/DD"
          label=""
          value={selectedDate}
          minDate={dayjs('2017-01-01')}
          onChange={(newSelectedDate) => {setSelectedDate(DateToYYYYMMDD(dayjs(newSelectedDate).toDate()));}}
          renderInput={(params) => <TextField {...params} sx={{
            width:"80%",
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#555555',
              },
              '&.Mui-focused fieldset': {
                borderColor: color
              },
            },
          }} />}
        />
    </LocalizationProvider>
    </ThemeProvider>
  );
}