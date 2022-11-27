import { Link } from "react-router-dom";
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import React, { useState, useEffect } from "react";
import StyledListItem from "../styles/linkStyle";
import { VscHome } from 'react-icons/vsc' //GiStairsGoal
import { GiStairsGoal } from 'react-icons/gi' //GiStairsGoal, IoPersonOutline
import { IoPersonOutline } from 'react-icons/io5' //GiStairsGoal, IoPersonOutline,BsPeople
import { BsPeople } from 'react-icons/bs' //GiStairsGoal, IoPersonOutline,BsPeople
import Button from '@material-ui/core/Button';
import '../styles/linkButton.css';

const Menu = ({pageNum}) => {
    return (
        <nav className="seo_nav">
            <Box sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.black', position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <List component="nav">
                    <nav>
                        <StyledListItem >
                            <Button className={(pageNum==0)?"selectedLinkButton":"linkButton"} component={Link} to="/" sx={{color:"pink !important"}}>
                                <VscHome /><ListItemText className="menuName" > Home</ListItemText>
                            </Button>
                        </StyledListItem>
                    </nav>
                    <nav >
                        <StyledListItem>
                            <Button className={(pageNum==1)?"selectedLinkButton":"linkButton"} component={Link} to="/Goal">
                                <GiStairsGoal /><ListItemText className="menuName"> Goal</ListItemText>
                            </Button>
                        </StyledListItem>
                    </nav>
                    <nav>
                        <StyledListItem>
                            <Button className={(pageNum==2)?"selectedLinkButton":"linkButton"} component={Link} to="/MyTask">
                                <IoPersonOutline /><ListItemText className="menuName"> My Task</ListItemText>
                            </Button>
                        </StyledListItem>
                    </nav>
                    <nav>
                        <StyledListItem>
                            <Button className={(pageNum==3)?"selectedLinkButton":"linkButton"} component={Link} to="/TeamLink">
                                <BsPeople /><ListItemText className="menuName"> Team</ListItemText>
                            </Button>
                        </StyledListItem>
                    </nav>
                </List>
            </Box>
        </nav >
    )
}
export default Menu;