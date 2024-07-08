import React, { useState, ChangeEvent } from 'react';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';

const Employee: React.FC = () => {
    const [employee, setEmployee] = useState<string>('');
    const [employeeError, setEmployeeError] = useState<string>('');

    const handleEmployeeChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        setEmployee(value);
        if (/[^\x00-\x7F]+/.test(value)) {
            setEmployeeError('Please enter only words without accents');
        } else {
            setEmployeeError('');
        }
    };

    return (
        <div style={{ marginTop: 20 }}>
            <Typography variant="h6" gutterBottom>
                Employee
            </Typography>
            <TextField
                label="Enter employee name"
                value={employee}
                onChange={handleEmployeeChange}
                fullWidth
                error={!!employeeError}
                helperText={employeeError}
                required
            />
        </div>
    );
};

export default Employee;
