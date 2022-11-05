import MyResponsivePie from '../components/Chart'
import data from '../components/data'
import { Outlet, Link } from "react-router-dom";
import '../App.css';
import '../styles/grid.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import Team from "../components/Team";
import Profile from "./Profile";
import StyledLink from '../styles/linkStyle';
import PinkLink from '../styles/pinkLink';

const Goal = () => {
    return (
        <div id="app" className="parent">
            <div className="box menu">
                <nav className="seo_nav">
                    <Box sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.black', bgcolor: 'background.black', position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        <List component="nav">
                            <nav>
                                <StyledLink to="/" style={{ textDecoration: 'none' }}>
                                    <ListItem >
                                        <ListItemButton sx={{ height: 80 }}>
                                            <ListItemText>Home</ListItemText>
                                        </ListItemButton>

                                    </ListItem>
                                </StyledLink>
                            </nav>
                            <nav>
                                <PinkLink to="/Goal" style={{ textDecoration: 'none' }} >

                                    <ListItem>
                                        <ListItemButton sx={{ height: 80 }}>
                                            <ListItemText > Goal</ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                </PinkLink>

                            </nav>
                            <nav>
                                <StyledLink to="/MyTask" style={{ textDecoration: 'none' }}>

                                    <ListItem>

                                        <ListItemButton sx={{ height: 80 }}>
                                            <ListItemText >  MyTask</ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                </StyledLink>

                            </nav>
                            <nav>
                                <StyledLink to="/TeamLink" style={{ textDecoration: 'none' }}>
                                    <ListItem>

                                        <ListItemButton sx={{ height: 80 }}>
                                            <ListItemText > TeamLink</ListItemText>
                                        </ListItemButton>

                                    </ListItem>
                                </StyledLink>
                            </nav>
                        </List>
                    </Box>
                </nav >
            </div >
            <div className="box profile"><Profile /></div>
            <div className="box content"><div style={{ width: '500px', height: '500px', margin: 'auto' }}>
                <MyResponsivePie data={data} />
            </div></div>
            <div className="box follower">팔로워</div>
            <div className="box tasklist">태스크</div>
            <div className="box teamlist">
                TeamList
            </div>
        </div >


    );
};

export default Goal;