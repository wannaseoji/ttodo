import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {BiDotsVerticalRounded} from "react-icons/bi";

export default function Profile() {
  let NickName = `Jang Hoon park`;
  let email = `abc1234@naver.com`
  let introText = `가슴을 데인 것 처럼 눈물에 배인 것 처럼 가슴을 데인 것 처럼 눈물에 배인 것 처럼`;
  return (
    <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
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
                {introText}
              </Typography>
            </React.Fragment>
          }>
        {NickName}
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
          <BiDotsVerticalRounded />
        </ListItemText>
      </ListItem>
    </List>
  );
}
