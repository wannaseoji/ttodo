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

const Goal = () => {
    return (
        <div id="app" className="parent">
            <div className="box menu">
                <nav id="seo_nav">
                    <Box sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.black', border: '1px solid white' }}>
                        <List component="nav">
                            <nav>
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <ListItem >
                                        <ListItemButton sx={{ height: 80, border: '1px solid white' }}>
                                            <ListItemText>Home</ListItemText>
                                        </ListItemButton>

                                    </ListItem>
                                </Link>
                            </nav>
                            <nav>
                                <Link to="/Goal" style={{ textDecoration: 'none' }} >

                                    <ListItem>
                                        <ListItemButton sx={{ height: 80, border: '1px solid white' }}>
                                            <ListItemText > Goal</ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                </Link>

                            </nav>
                            <nav>
                                <Link to="/MyTask" style={{ textDecoration: 'none' }}>

                                    <ListItem>

                                        <ListItemButton sx={{ height: 80, border: '1px solid white' }}>
                                            <ListItemText >  MyTask</ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                </Link>

                            </nav>
                            <nav>
                                <Link to="/TeamLink" style={{ textDecoration: 'none' }}>
                                    <ListItem>

                                        <ListItemButton sx={{ height: 80, border: '1px solid white' }}>
                                            <ListItemText > TeamLink</ListItemText>
                                        </ListItemButton>

                                    </ListItem>
                                </Link>
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