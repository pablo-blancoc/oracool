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
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;
const navItems = [
  {
    title: "Rules",
    navigateTo: "/rules"
  },
  {
    title: "Simulation",
    navigateTo: "/simulation"
  },
  {
    title: "Leaderboard",
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

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
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
            onClick={() => { navigate("/") }}
          >
            <img src="oracle_logo.svg" width="100px" alt="Oracle Logo"></img>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.title} sx={{ color: 'black' }} onClick={() => {
                navigate(item.navigateTo)
              }}>
                {item.title}
              </Button>
            ))}
          </Box>
          <Button variant="contained" startIcon={<PersonIcon />}
            sx={{
              // display: { sm: "none" }
            }}
            onClick={() => (navigate("/signin"))}
          >
            Sign In
          </Button>
          <IconButton
            sx={{
              display: { sm: 'none' }
            }}
          >
            <PersonIcon sx={{ color: 'black' }} />
          </IconButton>
          <IconButton
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
          </IconButton>
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