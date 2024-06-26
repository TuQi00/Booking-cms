import React,{ useState } from 'react';
import { TextField} from '@mui/material';
import Typography from '@mui/material/Typography';
function Email() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const handleEmailChange = (e) => {
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
        <TextField  label="Email" value={email} onChange={handleEmailChange} fullWidth error={!!emailError} helperText={emailError} required />
        </div>
    );
  }
  
  export default Email;