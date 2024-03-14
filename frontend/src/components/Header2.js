import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import backgroundImage from './Tree.jpeg'; 


const pages = ['Events', 'Our Team', 'Media', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header2() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          
          <IconButton edge="start" color="inherit" component={Link} to="/" aria-label="menu" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <img style={{}}src='../images/Logo.png' ></img>
          </IconButton>
          {/* <Box sx={{ flexGrow: 5, display: { xs: 'none', md: 'flex' } }}></Box> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            
            <MenuItem style={{color:'black'}} component={Link} to="/upcoming" color="inherit">Upcoming Events</MenuItem>
            <MenuItem style={{color:'black'}} component={Link} to="/past" color="inherit">Past Events</MenuItem>
            <MenuItem style={{color:'black'}} component={Link} to="/ourteam" color="inherit">Our Team</MenuItem>
            <MenuItem style={{color:'black'}} component={Link} to="/media" color="inherit">Media</MenuItem>
            <MenuItem style={{color:'black'}} component={Link} to="/contact" color="inherit">Contact</MenuItem>

            </Menu>
          </Box>
          <IconButton edge="start" component={Link} to="/" color="inherit" aria-label="menu" sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <img style={{}}src='../images/Logo.png' ></img>
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: "flex-end"} }}>
            
            <Button style={{textTransform:'none',fontSize: "20px", marginRight: "4%", color:'black'}} component={Link} to="/" color="inherit">Home</Button>
            <DropdownMenu/>
            <Button style={{textTransform:'none', fontSize: "20px", marginLeft: "4%", color:'black'}} component={Link} to="/ourteam" color="inherit">Our Team</Button>
            <Button style={{textTransform:'none', fontSize: "20px",marginLeft: "4%",color:'black'}} component={Link} to="/media" color="inherit">Media</Button>
            <Button style={{textTransform:'none', fontSize: "20px",marginLeft: "4%",color:'black'}} component={Link} to="/contact" color="inherit">Contact</Button>

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header2;