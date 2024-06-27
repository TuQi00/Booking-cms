import React, { useState, ChangeEvent } from 'react';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';

const Name: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [nameError, setNameError] = useState<string>('');

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        setName(value);
        if (/[^\x00-\x7F]+/.test(value)) {
            setNameError('Please enter only words without accents');
        } else {
            setNameError('');
        }
    };

    return (
        <div style={{ marginTop: 20 }}>
            <Typography variant="h6" gutterBottom>
                Name
            </Typography>
            <TextField
                label="Enter your name"
                value={name}
                onChange={handleNameChange}
                fullWidth
                error={!!nameError}
                helperText={nameError}
                required
            />
        </div>
    );
};

export default Name;