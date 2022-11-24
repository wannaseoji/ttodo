import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import { AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai';
import Avatar from '@mui/material/Avatar';
import '../styles/category.css';
import Scrollbars from 'react-custom-scrollbars';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";
import TaskList from "../components/tasklist/TaskList"


const CategoryList = ({ curTeam, teamTask, onShowCategoryModal = f => f, onShowCategoryTeamTask, onShowCategoryDeleteModify, onCheck = f => f }) => {



    var t1;
    console.log(` curTeam : ${curTeam}`)
    console.log(`team Task : ${teamTask}`)
    t1 = teamTask.filter(x1 => curTeam.name === x1.name)[0];
    console.log(`t1 : ${t1}`)
    if (t1 === null) {
        return (<></>);
    }
    // console.log(t1)
    return (
        <Scrollbars>
            {
                t1.myTask.sort((a, b) => a.relatedMembers.length - b.relatedMembers.length)
                    .map((element, index) => (
                        <Accordion
                            style={{ "backgroundColor": "#FFE2E9", "borderRadius": 10 }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                {/*동그란 이미지가 나오는 부분*/}
                                {element.relatedMembers.map((data) => (
                                    <Avatar
                                        src={data + ".jpg"}
                                        sx={{ width: "30px", height: "30px" }} />
                                ))}
                                <AiOutlinePlusCircle
                                    style={{ "marginLeft": "0.3vw" }}
                                    size="32"
                                    color="#FF9AB5"
                                    onClick={(e) => onShowCategoryTeamTask(e, t1, element.relatedMembers)} />
                            </AccordionSummary>
                            <AccordionDetails>
                                <TaskList tasks={element.tasks} limit={element.tasks.length} onCheckTask={onCheck} onModifyTaskModal={onShowCategoryDeleteModify} />

                            </AccordionDetails>
                        </Accordion>
                    ))
            }
            {
                t1.otherTask.sort((a, b) => a.relatedMembers.length - b.relatedMembers.length)
                    .map((element) => (
                        <Accordion
                            style={{ backgroundColor: "#FFE2E9", borderRadius: 10 }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                {/*동그란 이미지가 나오는 부분*/}
                                {element.relatedMembers.map((data) => (
                                    <Avatar
                                        src={data + ".jpg"}
                                        sx={{ width: "30px", height: "30px" }} />
                                ))}
                                <AiOutlinePlusCircle
                                    style={{ "marginLeft": "0.3vw" }}
                                    size="32"
                                    color="#FF9AB5"
                                    onClick={() => { alert(`아이콘 클릭`) }} />
                            </AccordionSummary>
                            <AccordionDetails>
                                <TaskList tasks={element.tasks} limit={element.tasks.length} onCheckTask={onCheck} onModifyTaskModal={onShowCategoryDeleteModify} />

                            </AccordionDetails>
                        </Accordion>
                    ))
            }
        </Scrollbars>
    );
}

export default CategoryList;
