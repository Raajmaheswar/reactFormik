import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

export default function SimplePaper() {
  return (
   /*  <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    > */
    <Box
      sx={{ display: 'flex',
      flexWrap: 'wrap'}}>  

      <Paper  sx={{ m: 1,
        width: 128,
        height: 128, borderRadius:'18px', borderBottomRightRadius:'42px'}} elevation={3}>
        <Box sx={{mt:-2}}>
        <AccessibilityNewIcon />
        </Box>
        </Paper>
        <Paper  sx={{ m: 1,
        width: '100%',
        height: 128, borderRadius:'12px', borderBottomRightRadius:'36px'}} elevation={24}>
        <Box sx={{mt:-2, ml:2, width:55,py:1, backgroundColor:'blue', color:'#ffff',textAlign:'center',
        borderRadius:1,boxShadow:'2px 2px 20px 1px grey'}}>
        <AccessibilityNewIcon />
        </Box>
        </Paper>
    </Box>
  );
}

/* 
display:inline-block;padding:3px;padding-right:8px;padding-left:8px; 
box-shadow:rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(64 64 64 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem; */

/* 
display:inline-block;padding:3px;padding-right:8px;padding-left:8px; background-color:blue;
border-radius:6px;color:#ffff;width:60px;text-align:center;
box-shadow:rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(64 64 64 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem; */