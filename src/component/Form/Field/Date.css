
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { Typography } from '@mui/material';
const DateSelect = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
      };

    return (
        <div style={{ marginTop: 20 }}>
                <Typography variant="h6" gutterBottom>
        Date
       </Typography>
                  <LocalizationProvider 
                    dateAdapter={AdapterDayjs}>
                    <MobileDatePicker
                        label="Select Date"
                        defaultValue={dayjs()}
                        inputFormat="MM/dd/yyyy"
                        renderInput={(params) => <TextField {...params} fullWidth />}
                    />
                    </LocalizationProvider>
        </div>
  
    );
};

export default DateSelect;