import * as React from 'react';
import {Outlet,Link} from 'react-router-dom'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
// import './ssr.css';
import { brown } from '@mui/material/colors';
export default function ColorTabs() {
    const [value, setValue] = React.useState('one');
  
    const handleChange = (event, newValue) => {
      debugger
      setValue(newValue);
    };
  
    return (
        <>
        {/* backgroundImage:'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1' */}
      <Box sx={{ width: '100%' }}>
     {/* <div style={{backgroundColor:brown}}> */}

        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
         <nav style={{margin:'auto'}}>
           <Link to="/" style={{margin:'2%'}}>
            
           <Tab value="one" label="Home" >
            </Tab></Link> 
           
          <Link to="/ToDo"style={{margin:'2%'}}>
          <Tab value="two" label="ToDo" />
          </Link>

          <Link to="/Photo"style={{margin:'2%'}}>
          <Tab value="three" label="Photos" />
          </Link>

          {/* <Link to="/User"style={{margin:'2%'}}>
          <Tab value="four" label="Users" />
          </Link> */}
          <Link to="/Posts"style={{margin:'2%'}}>
         <Tab value="five" label="Posts"/>
         </Link>
    </nav>
        </Tabs>
       
      </Box>
      
   
    </>
    );
  }