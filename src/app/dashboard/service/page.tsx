import * as React from 'react';
import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import { config } from '@/config';
import Service from '@/components/dashboard/tableservices/services';
export const metadata = { title: `Service | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
    return (
        <Stack spacing={3}>
            <div>
                <Typography variant="h4">Form</Typography>      
            </div>
            <Grid container spacing={2}>
                <Grid lg={12} xs={12}>  
                    <Service/>
                </Grid>
            </Grid>
        </Stack>
    );
}
