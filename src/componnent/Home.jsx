import * as React from 'react';
import {Link} from 'react-router-dom'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
export default function ColorTabs() {
  const [value, setValue] = React.useState('one');
  
    const handleChange = (event, newValue) => {
      debugger
      setValue(newValue);
    };
  
    return (
        <>
      <Box sx={{ width: '100%' }}>
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
          <Link to="/Posts"style={{margin:'2%'}}>
         <Tab value="three" label="Posts"/>
         </Link>
    </nav>
        </Tabs>
      </Box>
      
   
    </>
    );
  }