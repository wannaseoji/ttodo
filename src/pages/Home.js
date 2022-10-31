import { Outlet, Link } from "react-router-dom";
import '../App.css';
import '../styles/grid.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
const Home = () => {
    return (


        <div class="parent">
            <div class="box menu">메뉴
                <nav id="seo_nav">

                    <List >

                        <ListItem>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <ListItemButton>
                                    <ListItemText>Home</ListItemText>
                                </ListItemButton>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemText ><Link to="/Goal" style={{ textDecoration: 'none' }} > Goal</Link></ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <Link to="/MyTask" style={{ textDecoration: 'none' }}> MyTask</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/Team" style={{ textDecoration: 'none' }}> Team</Link>
                        </ListItem>
                    </List>
                </nav >
            </div >
            <div class="box profile">프로필</div>
            <div class="box content">타임라인/캘린더/차트</div>
            <div class="box follower">팔로워</div>
            <div class="box tasklist">태스크</div>
            <div class="box teamlist">공지사항</div>
        </div >


    );
};

export default Home;

