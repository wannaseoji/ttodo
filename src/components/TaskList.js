import * as React from 'react';
import { useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai';
import { SlOptionsVertical } from 'react-icons/sl';
import { IoMdAddCircleOutline } from "react-icons/io";

export default function TaskList({ tasks = [], onCheck = f => f, onModal = f => f , onAddTaskModal = f => f}) {

    return (
        <List sx={{ width: '95vw', left: '50%', transform: 'translateX(-50%)', bgcolor: 'background.paper' }}>
            <div width='95vw'>
                <span style={{
                    display: "inline-block",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "90%",
                    verticalAlign: "middle"
                }}>
                    카테고리 이름
                </span>
                <IconButton sx={{ float: "right" }} style={{ color: "#FF9AB5", maxWidth: "10%" }} aria-label="addTask" onClick={onAddTaskModal}>
                    <IoMdAddCircleOutline size='3vh' />
                </IconButton>
            </div>
            {tasks.map((value, i) => {
                const labelId = `checkbox-list-label-${i}`;
                console.log(`tasks.map 안의 value : ${value}`);
                // <Task value={value} i={i} />
                return (
                    <ListItem
                        key={i}
                        secondaryAction={
                            <IconButton edge="end" aria-label="comments" onClick={onModal}>
                                <SlOptionsVertical size='3vh' />
                            </IconButton>
                        }
                        sx={{ marginTop: '1vh' }}
                        disablePadding
                    >
                        <ListItemButton role={undefined} sx={{ backgroundColor: "#F0F0F0", borderRadius: 1.5 }} onClick={() => onCheck(i)} dense>
                            <ListItemIcon>
                                <Checkbox
                                    icon={<AiOutlineCheckCircle style={{ color: "#B7B7B7" }} />}
                                    checkedIcon={<AiFillCheckCircle style={{ color: "#FF9AB5" }} />}
                                    size='3vh'
                                    edge="start"
                                    //checked={checked.indexOf(i) !== -1} // check 일때 -1
                                    checked={value.check !== false}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={value.title} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}
