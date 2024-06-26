
import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
// style={{ margin: '8px', color: '#000000', borderColor: '#0033cc', fontSize: '18px'}} 
const SubServices = () => {
    const [selectedSubServices, setSelectedSubServices] = useState(null);

    const options = [
        { value: 'Subservice1', label: 'Sub Service 1' },
        { value: 'Subservice2', label: 'Sub Service 2' },
        { value: 'Subservice3', label: 'Sub Service 3' },
    ];
    const handleClick = (value) => {
        setSelectedSubServices(value === selectedSubServices ? null : value);
    };


    return (
      
        <div style={{ marginTop: 20 }}>
            <Typography variant="h6" gutterBottom>
                Sub Services
            </Typography>
            <Box display="flex" justifyContent="flex-start" alignItems="center">
                {options.map((option) => (
                    <Button
                        key={option.value}
                        variant={option.value === selectedSubServices ? 'contained' : 'outlined'}
                        onClick={() => handleClick(option.value)}
                       
                    >
                        {option.label}
                    </Button>
                ))}
        </Box>
        </div>
    );
};

export default SubServices;