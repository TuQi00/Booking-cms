import React, { useState, ChangeEvent } from 'react';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';

const Email: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        setEmail(value);
        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    return (
        <div style={{ marginTop: 20 }}>
            <Typography variant="h6" gutterBottom>
                Email
            </Typography>
            <TextField 
                label="Email" 
                value={email} 
                onChange={handleEmailChange} 
                fullWidth 
                error={!!emailError} 
                helperText={emailError} 
                required 
            />
        </div>
    );
};

export default Email;