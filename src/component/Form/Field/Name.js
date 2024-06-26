import React,{ useState } from 'react';
import { TextField} from '@mui/material';
import Typography from '@mui/material/Typography';
function Name() {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const handleNameChange = (e) => {
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
  }
  
  export default Name;