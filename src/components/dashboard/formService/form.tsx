'use client'

import React, { useState } from 'react';
import { Container, Grid, Button, Divider, Paper } from '@mui/material';
import Name from './Field/ServiceName';
import Description from './Field/Description';
import Image from './Field/Image';

const MyForm: React.FC = () => {
    const [selectedTime, setSelectedTime] = useState<string>(''); // Initialize with appropriate type
    
    const handleTimeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedTime(event.target.value as string);
    };

    const handleSubmit = () => {
        // Handle submit logic here
    };

    return (
        <Container>
            <Grid>
                <Grid item xs={7}>
                    <Paper style={{ padding: 20, border: '1px solid #ccc' }}>
                        <Name />
                        <Divider style={{ marginTop: 20, marginBottom: 20 }} />
                        <Image />
                        <Divider style={{ marginTop: 20, marginBottom: 20 }} />
                        <Description />
                        <Button variant="contained" color="primary" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MyForm;
