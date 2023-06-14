import { Box, Tabs, Tab } from "@mui/material";
import * as React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

export default function SecondaryNavbar({ tabItems }) {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();
  const location = useLocation();

  function getActiveTabIndex(){
    var activeTabIndex = 0
    tabItems && tabItems.map((obj, index) => {
      if (location.pathname === obj.navigateTo){
        activeTabIndex = index;
        return;
      }
    });
    return activeTabIndex
  }

  const [value, setValue] = React.useState(getActiveTabIndex());

  return (
    <Box sx={{ width: '100%', bgcolor: '#d60000' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        TabIndicatorProps={{
          style: {
            backgroundColor: "white"
          }
        }}
        TabScrollButtonProps={{
          sx: {
            color: "white"
          }
        }}
      >
        {
          tabItems && tabItems.map((item, index) => (
            <Tab
              key={`${index}-${item.title}`}
              label={item.title}
              style={{ color: "white" }}
              // onClick={navigate(item.navigateTo)}
              component={Link} to={item.navigateTo}
            />
          ))
        }
      </Tabs>
    </Box>
  )
}