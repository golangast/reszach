import * as React from "react";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
//https://codesandbox.io/s/04p1v46qww?file=/demo.js
const StyledAvatar = styled(Avatar)`
  ${({ theme }) => `
  cursor: pointer;
  background-color: ${theme.palette.primary.main};
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    background-color: ${theme.palette.secondary.main};
    transform: scale(1.3);
  }
  `}
`;
const customTheme = createTheme({
    palette: {
      primary: {
        main: deepPurple[500],
      },
    },
  });
const Youtube = (
    <Paper sx={{ m: 1, height:"35em"}} elevation={4}>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
<iframe width="800" height="405" src="https://www.youtube.com/embed/videoseries?list=PL_sE11fwtBT-0GqVHEX-tYTBzAIGHelQ6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</Paper>
  );


export default function Bottom() {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
      setChecked((prev) => !prev);
    };

   
  
  
    return (
      <Box sx={{ position: "absolute", bottom: 0, width: "100%"}}>
          <Slide  direction="up" in={checked} mountOnEnter unmountOnExit>
          {Youtube}
        </Slide>
        <BottomNavigation
          showLabels
          onChange={handleChange} 
        >
        
          <BottomNavigationAction control={<Switch checked={checked} onChange={handleChange} />} label="Youtube Series" icon={<YouTubeIcon />} />
         
         
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction  label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Box>
      
    );
  }