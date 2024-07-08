import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';

interface Option {
    value: string;
    label: string;
}

const Position: React.FC = () => {
    const [selectedPosition, setSelectedPosition] = useState<string | null>(null);

    const options: Option[] = [
        { value: 'position1', label: 'Position 1' },
        { value: 'position2', label: 'Position 2' },
        { value: 'position3', label: 'Position 3' },
    ];

    const handleClick = (value: string): void => {
        setSelectedPosition(value === selectedPosition ? null : value);
    };

    return (
        <div style={{ marginTop: 20 }}>
            <Typography variant="h6" gutterBottom>
                Position
            </Typography>
            <Box display="flex" justifyContent="flex-start" alignItems="center">
                {options.map((option) => (
                    <Button
                        key={option.value}
                        variant={option.value === selectedPosition ? 'contained' : 'outlined'}
                        onClick={() => handleClick(option.value)}
                        style={{ margin: '8px', fontSize: '18px' }} // Adjust margin between buttons
                    >
                        {option.label}
                    </Button>
                ))}
            </Box>
        </div>
    );
};

export default Position;
