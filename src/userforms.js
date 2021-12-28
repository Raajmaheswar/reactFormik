import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PersonRegistration from './personregistration'



export default function UserForms() {
  return (
    <Box sx={{ flexGrow: 1 }}  sx={{display:'flex', alignItems: 'center'}}>
      <Grid container spacing={2} sx={{alignItems: 'center'}}>
        <Grid item xs={12} sx={{display:'inline-flex'}}>
          <Paper elevation={16}><PersonRegistration type="Student"/></Paper>
        </Grid>
        <Grid item xs={12} sx={{display:'inline-flex'}}>
          <Paper elevation={24}><PersonRegistration type="Teacher"/></Paper>
        </Grid>
        <Grid item xs={12} sx={{display:'inline-flex'}}>
          <Paper elevation={16}><PersonRegistration type="Doctor"/></Paper>
        </Grid>
        <Grid item xs={12} sx={{display:'inline-flex'}}>
          <Paper elevation={16}><PersonRegistration type="Security"/></Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
