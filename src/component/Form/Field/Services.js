import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
// style={{ margin: '8px' , fontSize: '18px'}} // Adjust margin between buttons
const Services = () => {
    const [selectedService, setSelectedService] = useState(null);
    const options = [
        { value: 'service1', label: 'Service 1' },
        { value: 'service2', label: 'Service 2' },
        { value: 'service3', label: 'Service 3' },
    ];

    const handleClick = (value) => {
        setSelectedService(value === selectedService ? null : value);
    };

    return (
    <div style={{ marginTop: 20 }}>
        <Typography variant="h6" gutterBottom>
            Services
        </Typography>
        <Box display="flex" justifyContent="flex-start" alignItems="center">
                {options.map((option) => (
                    <Button
                        key={option.value}
                        variant={option.value === selectedService ? 'contained' : 'outlined'}
                        onClick={() => handleClick(option.value)}
                    >
                        {option.label}
                    </Button>
                ))}
        </Box>
    </div>
    );
};

export default Services;