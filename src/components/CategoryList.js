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
import {AiOutlinePlusCircle} from "react-icons/ai";
import { useState } from "react";
import TaskList from "../components/tasklist/TaskList"

<<<<<<< HEAD
const CategoryList = ({curTeam, teamTask, onShowCategoryModal=f=>f}) => {
=======
//장훈, 형민이가 같이 수정한 CategoryList 컴포넌트
const CategoryList = ({curTeam, teamTask, onShowCategoryModal=f=>f, onShowCategoryTeamTask, onShowCategoryDeleteModify, onCheck=f=>f}) => {

    

>>>>>>> 9dc36d4aeeef91e589042c455f2bc0e936d08fd4
    var t1;
    console.log(` curTeam : ${curTeam}`)
    console.log(`team Task : ${teamTask}`)
    t1 = teamTask.filter(x1 => curTeam.name === x1.name)[0];
    console.log(`t1 : ${t1}`)
    if(t1 === null) {
        return (<></>);
    }
    // console.log(t1)
    return (
        <Scrollbars>
        { 
            t1.myTask.sort((a, b) => a.relatedMembers.length - b.relatedMembers.length)
            .map((element, index) => (
            <Accordion 
            style={{ "backgroundColor": "#FFE2E9", "borderRadius": 10}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    {/*동그란 이미지가 나오는 부분*/}
                    {element.relatedMembers.map((data) => (
                        <Avatar
                        src={data + ".jpg"}
                        sx={{ width: "30px", height: "30px"}} />
                    ))}
                    <AiOutlinePlusCircle 
                        style={{ "marginLeft": "0.3vw"}}
                        size="32" 
                        color="#FF9AB5"
                        onClick={(e) => onShowCategoryTeamTask(e,t1, element.relatedMembers)}/>
                </AccordionSummary>
                <AccordionDetails>
                    <TaskList tasks={element.tasks} limit={element.tasks.length} onCheckTask={onCheck} onModifyTaskModal={onShowCategoryDeleteModify}/>
                    {/* <List sx={{ width: '40vw', left: '50%', transform: 'translateX(-50%)', bgcolor: 'background.paper' }}>
                        {element.tasks.map((data) => (
                            <ListItem>
                                <Checkbox
                                icon={<AiOutlineCheckCircle style={{ color: "#B7B7B7" }} />}
                                checkedIcon={<AiFillCheckCircle style={{ color: "#FF9AB5" }} />}
                                size='3vh'
                                edge="start"
                                //checked={}
                                tabIndex={-1} />
                                {data.title}
                            </ListItem>    
                        ))}
                    </List> */}
                </AccordionDetails>
            </Accordion>
        ))
        }
        {
            t1.otherTask.sort((a, b) => a.relatedMembers.length - b.relatedMembers.length)
            .map((element) => (
                <Accordion 
                style={{ backgroundColor: "#FFE2E9", borderRadius: 10}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        {/*동그란 이미지가 나오는 부분*/}
                        {element.relatedMembers.map((data) => (
                            <Avatar
                            src={data + ".jpg"}
                            sx={{ width: "30px", height: "30px"}} />
                        ))}
                        <AiOutlinePlusCircle 
                            style={{ "marginLeft": "0.3vw"}}
                            size="32" 
                            color="#FF9AB5"
                            onClick={() => { alert(`아이콘 클릭`)}}/>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TaskList tasks={element.tasks} limit={element.tasks.length} onCheckTask={onCheck} onModifyTaskModal={onShowCategoryDeleteModify}/>
                        {/* <List sx={{ width: '40vw', left: '50%', transform: 'translateX(-50%)', bgcolor: 'background.paper' }}>
                            {element.tasks.map((data) => (
                            <ListItem>
                                <Checkbox
                                icon={<AiOutlineCheckCircle style={{ color: "#B7B7B7" }} />}
                                checkedIcon={<AiFillCheckCircle style={{ color: "#FF9AB5" }} />}
                                size='3vh'
                                edge="start"
                                //checked={}
                                //checked={}
                                tabIndex={-1} />
                                {data.title}
                            </ListItem>    
                            ))} 
                        </List> */}
                    </AccordionDetails>
                </Accordion>
            ))
        }
        </Scrollbars>
    );
}

export default CategoryList;
