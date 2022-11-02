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
import Profile from "./Profile";

import React, { useState, useEffect } from "react";
import TaskList from '../components/TaskList';
import taskData from '../assets/task-data.json';
import Modal from '../components/Modal';



const Home = () => {

    const [tasks, setTasks] = useState(taskData);
    useEffect(() => setTasks(taskData), [taskData]);
    const [modalOpen, setModalOpen] = useState(false);

    const onCheckTask = (index) => {
        const newTasks = tasks.map((task, i) => {
            if (index === i) {
                task.check = !(task.check);
            }
            return task;
        });
        console.log(`newTasks : ${newTasks}`);
        setTasks(newTasks);
    }

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const onShowModal = () => {
        openModal();
    }

    return (
        <div id="app" className="parent" >
            <div className="box menu" >
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
            <div className="box content">타임라인/캘린더/차트</div>
            <div className="box follower">팔로워</div>
            <div className="box tasklist">
                <TaskList
                    tasks={tasks}
                    onCheck={onCheckTask}
                    onModal={onShowModal}
                />
                <Modal open={modalOpen} close={closeModal} header="Options" />
            </div>
            <div className="box teamlist">
                TeamList
                <Team />
                <Team />
                <Team />
            </div>
        </div >


    );
};

export default Home;

