import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dayjs } from 'dayjs';
import { Typography } from '@mui/material';

const DateSelect: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

    const handleDateChange = (newDate: Dayjs | null) => {
        setSelectedDate(newDate);
    };

    return (
        <div style={{ marginTop: 20 }}>
            <Typography style={{ marginTop: 20, marginBottom:20 }} variant="h6" gutterBottom>
                Date
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MobileDatePicker
                    label="Select Date"
                    value={selectedDate}
                    onChange={handleDateChange}
                />
            </LocalizationProvider>
        </div>
    );
};

export default DateSelect;

