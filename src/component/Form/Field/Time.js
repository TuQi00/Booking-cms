import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
//  style={{ margin: '8px', borderColor: '#006633' ,fontSize: '18px' }}
function TimeSelect() {
  const [selectedTime, setSelectedTime] = useState(null);

  const options = [
    { value: 'Time1', label: 'Time1' },
    { value: 'Time2', label: 'Time2' },
    { value: 'Time3', label: 'Time3' },
  ];

  const handleClick = (newValue) => {
    setSelectedTime(newValue);
  };

  return (
    <div style={{ marginTop: 20 }}>
      <Typography variant="h6" gutterBottom>
        Time
      </Typography>
      <Box display="flex" justifyContent="flex-start" alignItems="center">
        {options.map((option) => (
          <Button
            key={option.value}
            variant={option.value === selectedTime ? 'contained' : 'outlined'}
            onClick={() => handleClick(option.value)}
          
          >
            {option.label}
          </Button>
        ))}
      </Box>
    </div>
  );
}

export default TimeSelect;