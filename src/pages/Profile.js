import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {BiDotsVerticalRounded} from "react-icons/bi";
import member from "../assets/Member.json";
import { useState } from 'react';


export default function Profile() {
    const [idx, setIdx] = useState(0);
    const {name, image, intro, email} = member[idx];
    console.log(image);
  return (
    <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar 
            alt="Remy Sharp" 
            src={image}
            sx={{ width: "50px", height: "50px" }}/>
        </ListItemAvatar>
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {intro}
              </Typography>
            </React.Fragment>
          }>
        {name}
        <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {`  ${email}`}
              </Typography>
            </React.Fragment>
        </ListItemText>
        <ListItemText>
          <BiDotsVerticalRounded 
            onClick={ () => { setIdx(idx + 1); }}/>
        </ListItemText>
      </ListItem>
    </List>
  );
}
