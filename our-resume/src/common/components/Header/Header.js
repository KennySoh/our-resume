import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';

import "./Header.css";
import { MenuItem } from './components/MenuItem/MenuItem';
import mainLogo from 'assets/mainLogo.png';

export const Header = () => {
  return (
    <div className="header">
      <div className="header__leftContainer">
        <img className="header__mainLogo" src={mainLogo}/>
      </div>
      <div className="header__rightContainer">
        <MenuItem Logo={PersonOutlineOutlinedIcon} title='About'></MenuItem>
        <MenuItem Logo={WorkOutlineOutlinedIcon} title='Experience'></MenuItem>
        <MenuItem Logo={FolderCopyOutlinedIcon} title='Projects'></MenuItem>
        <MenuItem Logo={EmailOutlinedIcon} title='Contact'></MenuItem>
        <MenuItem Logo={MenuBookOutlinedIcon} title='Blog'></MenuItem>
        <div className="header__resume"> Resume</div>
      </div>
      
    </div>
  )
}
