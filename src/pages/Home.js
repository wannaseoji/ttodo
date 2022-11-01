import { Outlet, Link } from "react-router-dom";
import '../App.css';
import '../styles/grid.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import Team from "./Team";

const Home = () => {
    return (

        <div class="parent">
            <div class="box menu">
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
            <div class="box profile">프로필</div>
            <div class="box content">타임라인/캘린더/차트</div>
            <div class="box follower">팔로워</div>
            <div class="box tasklist">태스크</div>
            <div class="box teamlist">
                TeamList
                <Team/>
                <Team/>
                <Team/>
            </div>
        </div >


    );
};

export default Home;

