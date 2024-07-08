import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';

interface Option {
    value: string;
    label: string;
}

const Type: React.FC = () => {
    const [selectedType, setSelectedType] = useState<string | null>(null);

    const options: Option[] = [
        { value: 'Type1', label: 'Service Type 1' },
        { value: 'Type2', label: 'Service Type 2' },
        { value: 'Type3', label: 'Service Type 3' },
    ];

    const handleClick = (value: string): void => {
        setSelectedType(value === selectedType ? null : value);
    };

    return (
        <div style={{ marginTop: 20 }}>
            <Typography variant="h6" gutterBottom>
                Service Type
            </Typography>
            <Box display="flex" justifyContent="flex-start" alignItems="center">
                {options.map((option) => (
                    <Button
                        key={option.value}
                        variant={option.value === selectedType ? 'contained' : 'outlined'}
                        onClick={() => handleClick(option.value)}
                        style={{ margin: '8px', color: '#000000', borderColor: '#0033cc', fontSize: '18px' }}
                    >
                        {option.label}
                    </Button>
                ))}
            </Box>
        </div>
    );
};

export default Type;