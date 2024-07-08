import React, { useState, ChangeEvent } from 'react';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';

const Price: React.FC = () => {
    const [price, setPrice] = useState<string>('');
    const [priceError, setPriceError] = useState<string>('');

    const handlePriceChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        setPrice(value);
        // Price validation regex: ensures it's a valid number (with optional decimal part)
        const priceRegex = /^\d+(\.\d{1,2})?$/; 
        if (!priceRegex.test(value)) {
            setPriceError('Please enter a valid price (e.g., 123.45)');
        } else {
            setPriceError('');
        }
    };

    return (
        <div style={{ marginTop: 20 }}>
            <Typography variant="h6" gutterBottom>
                Price
            </Typography>
            <TextField
                label="Price"
                value={price}
                onChange={handlePriceChange}
                fullWidth
                error={!!priceError}
                helperText={priceError}
                required
            />
        </div>
    );
};

export default Price;