import React, { useState, ChangeEvent } from 'react';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';

const Description: React.FC = () => {
    const [description, setDescription] = useState<string>('');
    const [descriptionError, setDescriptionError] = useState<string>('');

    const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        setDescription(value);
        if (value.length < 10) {
            setDescriptionError('Description must be at least 10 characters long');
        } else {
            setDescriptionError('');
        }
    };

    return (
        <div style={{ marginTop: 20 }}>
            <Typography variant="h6" gutterBottom>
                Description
            </Typography>
            <TextField 
                label="Description" 
                value={description} 
                onChange={handleDescriptionChange} 
                fullWidth 
                multiline 
                rows={4} 
                error={!!descriptionError} 
                helperText={descriptionError} 
                required 
            />
        </div>
    );
};

export default Description;