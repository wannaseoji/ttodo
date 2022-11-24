import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { BiDotsVerticalRounded, BiFontSize } from "react-icons/bi";
import member from "../assets/Member.json";
import { useState } from 'react';

import { VscHome } from 'react-icons/vsc' //GiStairsGoal
import { GiStairsGoal } from 'react-icons/gi' //GiStairsGoal, IoPersonOutline
import { IoPersonOutline } from 'react-icons/io5' //GiStairsGoal, IoPersonOutline,BsPeople
import { BsPeople } from 'react-icons/bs' //GiStairsGoal, IoPersonOutline,BsPeople

import '../styles/Profile.css';
import { createTheme, ThemeProvider } from '@mui/material';

export default function Profile({myProfile, onShowModal}) {
  const { name, image, intro, email } = myProfile[0];
  return (
    <List sx={{ width: '100%', maxWidth: 550, bgcolor: 'background.paper'}}>
      <ListItem sx={{padding:"0"}}>
        <ListItemAvatar>
          <Avatar
            className="profile"
            alt="Remy Sharp"
            src={image}
            sx={{ width: "90px", height: "90px" }} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline', fontWeight: 'bold', fontSize:"1.7em"}}
                component={'span'}
                color="#FF9AB5">
                {`${name}`}
              </Typography>
              <Typography
                sx={{ marginLeft:'0.5em', display: 'inline' }}
                component={'span'}
                variant={'caption'}
                color="#555555">
                {email}
              </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline-block', 
                      width: '100%', 
                      overflow: 'hidden',
                      textOverflow:'ellipsis',
                      whiteSpace:'nowrap'}}
                component={'span'}
                variant={'body2'}
                color="#555555"
              >
                {intro}
              </Typography>
            </React.Fragment>
          }
        />
        <BiDotsVerticalRounded size={35} color="#D9D9D9" onClick={onShowModal}/>
      </ListItem>
    </List>
  );
}
