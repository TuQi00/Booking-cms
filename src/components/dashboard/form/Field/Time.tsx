import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';

interface Option {
    value: string;
    label: string;
}

const TimeSelect: React.FC = () => {
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const options: Option[] = [
        { value: 'Time1', label: 'Time1' },
        { value: 'Time2', label: 'Time2' },
        { value: 'Time3', label: 'Time3' },
    ];

    const handleClick = (newValue: string): void => {
        setSelectedTime(newValue);
    };

    return (
        <div style={{ marginTop: 20 }}>
            <Typography variant="h6" gutterBottom>
                Time
            </Typography>
            <Box display="flex" justifyContent="flex-start" alignItems="center">
                {options.map((option) => (
                    <Button
                        key={option.value}
                        variant={option.value === selectedTime ? 'contained' : 'outlined'}
                        onClick={() => handleClick(option.value)}
                        style={{ margin: '8px', borderColor: '#006633', fontSize: '18px' }}
                    >
                        {option.label}
                    </Button>
                ))}
            </Box>
        </div>
    );
};

export default TimeSelect;
