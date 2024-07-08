import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, Typography, SelectChangeEvent } from '@mui/material';

const Duration: React.FC = () => {
    const [duration, setDuration] = useState<string>('');
    const [durationError, setDurationError] = useState<string>('');

    const options = [
        '15m', '30m', '45m', '1h', '1h15m', '1h30m', '1h45m', '2h'
    ];

    const handleDurationChange = (event: SelectChangeEvent<string>): void => {
        const value = event.target.value as string;
        setDuration(value);
        if (!options.includes(value)) {
            setDurationError('Please select a valid duration');
        } else {
            setDurationError('');
        }
    };

    return (
        <div style={{ marginTop: 20 }}>
            <Typography variant="h6" gutterBottom>
                Duration
            </Typography>
            <FormControl fullWidth error={!!durationError}>
                <InputLabel id="duration-label">Duration</InputLabel>
                <Select
                    labelId="duration-label"
                    value={duration}
                    onChange={handleDurationChange}
                    label="Duration"
                >
                    {options.map(option => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            {durationError && (
                <Typography color="error" variant="body2">
                    {durationError}
                </Typography>
            )}
        </div>
    );
};

export default Duration;
