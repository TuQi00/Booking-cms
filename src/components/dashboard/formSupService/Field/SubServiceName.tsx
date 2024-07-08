import React, { useState, ChangeEvent } from 'react';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';

const SubServiceName: React.FC = () => {
    const [services, setServices] = useState<string>('');
    const [servicesError, setServicesError] = useState<string>('');

    const handleServicesChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        setServices(value);
        if (/[^\x00-\x7F]+/.test(value)) {
            setServicesError('Please enter only words without accents');
        } else {
            setServicesError('');
        }
    };

    return (
        <div style={{ marginTop: 20 }}>
            <Typography variant="h6" gutterBottom>
                Services
            </Typography>
            <TextField
                label="Enter your services"
                value={services}
                onChange={handleServicesChange}
                fullWidth
                error={!!servicesError}
                helperText={servicesError}
                required
            />
        </div>
    );
};

export default SubServiceName;