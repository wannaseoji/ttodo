import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';

import {AiOutlineCheckCircle, AiFillCheckCircle} from 'react-icons/ai';
import { HiOutlineDotsVertical } from "react-icons/hi";


export default function Task({task = [], i,  onCheck=f=>f, onOptionsModal=f=>f}) {
    return (
        <ListItem
                key={i}
                secondaryAction={
                <IconButton edge="end" aria-label="comments" onClick={onOptionsModal}>
                    <HiOutlineDotsVertical size='3vh' />
                </IconButton>
                }
                sx={{marginTop:'1vh'}}
                disablePadding
            >
            <ListItemButton role={undefined} sx={{ backgroundColor: "#F0F0F0", borderRadius: 1.5}} onClick={() => onCheck(task.index)} dense>
                <ListItemIcon>
                    <Checkbox
                    icon={<AiOutlineCheckCircle style={{color: "#B7B7B7"}} />}
                    checkedIcon={<AiFillCheckCircle style={{color: "#FF9AB5"}} />}
                    size='3vh'
                    edge="start"
                    checked = {task.check !== false}
                    tabIndex={-1}
                    disableRipple
                    />
                </ListItemIcon>
                <ListItemText id={i} primary={task.title} />
            </ListItemButton>
        </ListItem>
        
    );
}
