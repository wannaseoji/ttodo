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


//장훈, 형민이가 같이 수정한 CategoryList 컴포넌트
const CategoryList = ({setClickedMemberList, curTeam, teamTask, onShowCategoryModal=f=>f, onShowCategoryTeamTask, onShowCategoryDeleteModify, onCheck=f=>f}) => {
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
            style={{ "backgroundColor": "#FFE2E9", "borderRadius": 10, maxWidth: "95%"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    {/*동그란 이미지가 나오는 부분*/}
                    {element.relatedMembers.map((data) => (
                        <Avatar
                        title={data}
                        src={data + ".jpg"}
                        sx={{ width: "30px", height: "30px"}} />
                    ))}
                    <AiOutlinePlusCircle 
                        style={{ "marginLeft": "0.3vw"}}
                        size="32" 
                        color="#FF9AB5"
                        onClick={(e) => {
                            onShowCategoryTeamTask(e,t1, element.relatedMembers);
                            setClickedMemberList([...element.relatedMembers]);
                            }}/>
                </AccordionSummary>
                <AccordionDetails>
                    <TaskList tasks={element.tasks} limit={element.tasks.length} onCheckTask={onCheck} onModifyTaskModal={onShowCategoryDeleteModify}/>
                </AccordionDetails>
            </Accordion>
        ))
        }
        {
            t1.otherTask.sort((a, b) => a.relatedMembers.length - b.relatedMembers.length)
            .map((element) => (
                <Accordion 
                style={{ backgroundColor: "#FFE2E9", borderRadius: 10, maxWidth: "95%"}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        {/*동그란 이미지가 나오는 부분*/}
                        {element.relatedMembers.map((data) => (
                            <Avatar
                            title={data}
                            src={data + ".jpg"}
                            sx={{ width: "30px", height: "30px"}} />
                        ))}
                        <AiOutlinePlusCircle 
                            style={{ "marginLeft": "0.3vw"}}
                            size="32" 
                            color="#FF9AB5"
                            onClick={(e) => {
                                onShowCategoryTeamTask(e,t1, element.relatedMembers);
                                setClickedMemberList([...element.relatedMembers]);
                                }}/>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TaskList tasks={element.tasks} limit={element.tasks.length} onCheckTask={onCheck} onModifyTaskModal={onShowCategoryDeleteModify}/>
                    </AccordionDetails>
                </Accordion>
            ))
        }
        </Scrollbars>
    );
}

export default CategoryList;