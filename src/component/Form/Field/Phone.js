import React,{ useState } from 'react';
import { TextField} from '@mui/material';
import Typography from '@mui/material/Typography';
function Phone() {
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const handlePhoneChange = (e) => {
        const value = e.target.value;
        setPhone(value);
        // Phone number validation regex
        const phoneRegex = /^\d{10}$/; // Assuming phone number is 10 digits
        if (!phoneRegex.test(value)) {
            setPhoneError('Please enter a valid 10-digit phone number');
        } else {
            setPhoneError('');
        }
    };
    return (
        <div style={{ marginTop: 20 }}>
        <Typography variant="h6" gutterBottom>
        Phone Number
       </Typography>
        <TextField  label="Phone Number" value={phone} onChange={handlePhoneChange} fullWidth error={!!phoneError} helperText={phoneError} required />
        </div>
    );
  }
  
  export default Phone;