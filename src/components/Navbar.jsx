import React, { useState } from 'react';
import { Menu, MenuItem, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleHomeClick = () => {
    navigate('/');
    handleClose();
  };

  return (
    <header className="bg-gray-700 text-white p-4 flex items-center">
      {/* Left Side: Menu Button */}
      <div className="flex items-center space-x-4">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuClick}
        >
          <MenuIcon className="text-white" />
        </IconButton>

        {/* Menu Popover */}
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleHomeClick}>Home</MenuItem>
          <MenuItem component={Link} to="/sptv" onClick={handleClose}>SPTV</MenuItem>
          <MenuItem component={Link} to="/sabal" onClick={handleClose}>Sabal</MenuItem>
          <MenuItem component={Link} to="/pda" onClick={handleClose}>PDA</MenuItem>
          <MenuItem component={Link} to="/news" onClick={handleClose}>News</MenuItem>
          <MenuItem component={Link} to="/about" onClick={handleClose}>About Us</MenuItem>
          <MenuItem component={Link} to="/contact" onClick={handleClose}>Contact Us</MenuItem>
        </Menu>
      </div>

      {/* Center: Logo */}
      <div className="flex-grow flex justify-center items-center space-x-2">
        <img src="/logo.jpeg" className="w-[3%] h-[3%]" alt="SPTV" />
        <Typography variant="h5" className="font-bold">
          SPTV Samajwadi Party
        </Typography>
      </div>

      {/* Right Side: Headline or Navigation Links */}
      <div className="hidden md:flex items-center space-x-4">
        <a href="/home" className="hover:text-gray-200">Home</a>
        <a href="/sptv" className="hover:text-gray-200">SPTV</a>
        <a href="/sabal" className="hover:text-gray-200">Sabal</a>
        <a href="/pda" className="hover:text-gray-200">PDA</a>
        <a href="/news" className="hover:text-gray-200">News</a>
        <a href="/about" className="hover:text-gray-200">About Us</a>
        <a href="/contact" className="hover:text-gray-200">Contact</a>
      </div>

      {/* Mobile Close Button */}
      <div className="md:hidden flex items-center">
        {anchorEl && (
          <IconButton onClick={handleClose} className="text-white">
            <CloseRoundedIcon />
          </IconButton>
        )}
      </div>
    </header>
  );
};

export default Navbar;
