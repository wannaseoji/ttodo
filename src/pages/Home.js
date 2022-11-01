import { Outlet, Link } from "react-router-dom";
import '../App.css';
import '../styles/grid.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import StarRating from "../components/StarRating";
import { useParams } from 'react-router-dom';
import RenderStar from "../components/RenderStar";

import { useNavigate } from 'react-router-dom';



const Home = () => {
    const navigate = useNavigate();
    const move = () => {
        // 두번재 인자의 state 속성에 원하는 파라미터를 넣어준다. (id, job을 넣어봤다)
        navigate('/Goal', {
            state: {
                selectedStars: 5,
                //job: '개발자'
            }
        });
    };

    return (
        <div className="parent">
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
            <div className="box profile">
                <div>
                    <button onClick={move}>이동</button>
                </div>
            </div>

            <div className="box content">타임라인/캘린더/차트</div>
            <div className="box follower">팔로워</div>
            <div className="box tasklist">태스크</div>
            <div className="box teamlist">공지사항</div>
        </div >


    );
};

export default Home;

