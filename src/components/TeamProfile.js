import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useState } from 'react';

import '../styles/Profile.css';


//팀에 대한 데이터를 넣어야한다.
const TeamProfile = ({curTeam, onShowTeamProfileModal}) => {
    const { name, img, intro } = curTeam;
    return (
        <List sx={{ width: '100%', maxWidth: 580, bgcolor: 'background.paper' }}>
        <ListItem>
            <ListItemAvatar>
            <Avatar
                className="profile"
                alt="Remy Sharp"
                title={name}
                src={img}
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
                    </Typography>
                    </React.Fragment>
                }
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ 
                            display: 'inline-block', 
                            width: '100%', 
                            overflow: 'hidden',
                            textOverflow:'ellipsis',
                            whiteSpace:'nowrap',
                            marginLeft: '0.2vw'}}
                        component={'span'}
                        variant={'body2'}
                        color="#555555"
                    >
                        {intro}
                    </Typography>
                    </React.Fragment>
                }
            />
            <BiDotsVerticalRounded 
                size={35} 
                color="#D9D9D9"
                sx={{ marginLeft: ''}}
                onClick={onShowTeamProfileModal} />
        </ListItem>
        </List>
    );
}

export default TeamProfile;