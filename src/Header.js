import React from 'react'
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';
import logo from "./tinder-logo.png";

function Header() {
  return (
    <div className='header'>
      <IconButton>
      <PersonIcon fontSize="large" className="header_icon" />
      </IconButton>
      <img 
         className="header_logo" 
         src={logo} 
         alt="tinder logo" 
      />
     
     <IconButton>
      <ForumIcon fontSize="large" className="header_icon" />
     </IconButton>
        
    </div>
  );
}

export default Header;