import React,{ useState } from 'react';
import { Container, Grid,  Button, Divider,Paper, MenuItem} from '@mui/material';
import Name from './Field/Name';
import Email from './Field/Email';
import Phone from './Field/Phone';
import Services from './Field/Services';
import DateSelect from './Field/Date';
import TimeSelect from './Field/Time';
import SubServices from './Field/SubServices';

const MyForm = () => {
    const handleSubmit = () => {
        //handle submit

    };
    return (
        <Container maxWidth="md">
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={7}>
                    <Paper style={{ padding: 20, border: '1px solid #ccc' }}>
                        <Name />
                        <Email/>
                        <Phone/>
                        <Divider  style={{ marginTop: 20, marginBottom:20 }} />
                        <Services />
                        <SubServices/>
                        <div style={{ marginTop: 20, marginBottom:20}}></div> 
                        <DateSelect/>
                        <div style={{ marginTop: 20, marginBottom:20}}></div> 
                        <TimeSelect/>
                        <div style={{ marginTop: 20, marginBottom:20}}></div> 
                        <Button variant="contained" color="primary">Submit</Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
  );
};
const Form = () => {
    return (
        <section>
            <MyForm />
        </section>
    );
};
export default Form;