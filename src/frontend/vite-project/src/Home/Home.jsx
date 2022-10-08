import * as React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Unstable_Grid2';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function Home() {

  return (
    
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: "100%",
          height: 128,
        },
      }}
    >
       <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      <Grid xs={2}>
        </Grid>
        <Grid xs={8}>
          <Item>
          <Grid container spacing={2}>
          <Grid xs={6}>
          <Paper elevation={10} className="centered-div" style={{
 height:300,width:"100%",padding:"7%"}}>
      <Avatar alt="Zachary Endrulat" src="/me.jpg"
      sx={{ width: "80%", height: "100%" }} />
     
        </Paper>

        </Grid>
        <Grid xs={6}>
        <br />
        <label>My name is Zachary Endrulat</label><br/>
        <label>Welcome to my website</label><br/>
        <label>I enjoy programming</label><br/> 
        </Grid>
        </Grid>
          </Item>
        </Grid>
        <Grid xs={1}>
       
        </Grid>
        <Grid xs={6}>
          <Item>
          <Item>xs=8</Item>
            </Item>
        </Grid>
        <Grid xs={6}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>

     
    </Box>
  );
}
