import { Box, Tabs, Tab } from "@mui/material";
import * as React from 'react';

export default function SecondaryNavbar({ listItems }) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          listItems && listItems.map((item, index) => (
            <Tab
              key={`${index}-${item.title}`}
              label={item.title}
              style={{ color: "white" }}
            />
          ))
        }
      </Tabs>
    </Box>
  )
}