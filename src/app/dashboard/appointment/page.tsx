import * as React from 'react';
import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { ThemeProvider } from '@mui/material/styles';
import { config } from '@/config';
import Appointment from '@/components/dashboard/appointment/appointment';
import theme from '@/components/dashboard/appointment/theme';

// Define the metadata for the page
export const metadata = { 
    title: `Appointment | Dashboard | ${config.site.name}` 
} satisfies Metadata;

// Define and export the Page component
export default function Page(): React.JSX.Element {
    return (
        <ThemeProvider theme={theme}>
              <Appointment />
      </ThemeProvider>
    );
}