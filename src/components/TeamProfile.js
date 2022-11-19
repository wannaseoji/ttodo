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
const TeamProfile = ({curTeam}) => {
    const [idx, setIdx] = useState(0);
    const { name, img, intro } = curTeam;
    
    return (
        <List sx={{ width: '100%', maxWidth: 550, bgcolor: 'background.paper' }}>
        <ListItem>
            <ListItemAvatar>
            <Avatar
                className="profile"
                alt="Remy Sharp"
                src={img}
                sx={{ width: "70px", height: "70px" }} />
            </ListItemAvatar>
            <ListItemText
            primary={
                <React.Fragment>
                <Typography
                    sx={{ display: 'inline', fontWeight: 'bold' }}
                    component={'span'}
                    variant={"h6"}
                    color="#FF9AB5"
                >
                    {`${name}`}
                </Typography>
                </React.Fragment>
            }
            secondary={
                <React.Fragment>
                <Typography
                    sx={{ display: 'inline-block', 
                        width: '23vw', 
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
            <BiDotsVerticalRounded size={25} color="#D9D9D9"
            onClick={() =>  //프로필을 수정하는 아이콘 여기서 프로필을 수정하게 하면 될듯
            { setIdx(idx + 1); }} />
        </ListItem>
        </List>
    );
}

export default TeamProfile;