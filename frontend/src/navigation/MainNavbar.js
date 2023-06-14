import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Tabs, Tab, Menu, MenuItem } from "@mui/material";

const drawerWidth = 240;
const navItems = [
  {
    title: "Home",
    navigateTo: "/"
  },
  {
    title: "Rules",
    navigateTo: "/rules"
  },
  {
    title: "Simulation",
    navigateTo: "/simulation"
  },
  {
    title: "Predictions",
    navigateTo: "/leaderboard"
  }
];

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MainNavbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  function getActiveTabIndex(){
    var activeTabIndex = false
    navItems.map((obj, index) => {
      if (location.pathname === obj.navigateTo){
        activeTabIndex = index;
        return;
      }
    });
    return activeTabIndex
  }

  const [value, setValue] = React.useState(getActiveTabIndex());
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav"
        sx={{
          backgroundColor: 'white'
        }}
        elevation={0}
      >
        <Toolbar>
          <Box
            sx={{ flexGrow: 1 }}
          >
            <img
              src="oracle_logo.svg"
              width="100px"
              alt="Oracle Logo"
              onClick={() => { navigate("/") }}
            >
            </img>
          </Box>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            TabScrollButtonProps={{
              sx: {
                color: "black"
              }
            }}
          >
            {
              navItems.map((item, index) => (
                <Tab
                  key={`${index}-${item.title}`}
                  label={item.title}
                  onClick={() => { navigate(item.navigateTo) }}
                />
              ))
            }
          </Tabs>
          <IconButton
            sx={{ padding: 0 }}
            onClick={handleMenu}
          >
            <AccountCircleIcon
              fontSize='large'
              sx={{ color: 'black' }}
            />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem 
              onClick={() => {
                handleClose()
                navigate("/signin")
              }}
            >Sign In</MenuItem>
            <MenuItem onClick={handleClose}>Create Account</MenuItem>
          </Menu>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: 'none' }
            }}
          >
            <MenuIcon sx={{ color: "black" }} />
          </IconButton> */}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}

        </Drawer>
      </Box>
      <DrawerHeader />
    </Box>
  );
}