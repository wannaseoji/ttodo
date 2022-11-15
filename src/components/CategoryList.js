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
import category from "../assets/category.json";
import Scrollbars from 'react-custom-scrollbars';


const CategoryList = () => {
    return (
        <Scrollbars>
            {/*
            <div style={{overflow: 'auto', width: '50vw', height: "55vh"}} className="categoryScroll">
            <Scrollbars style={{height:'100%', backgroundColor:"#FFFFFF", borderRadius:"0px 0px 10px 10px"}}>
            </Scrollbars>
            <div style={{overflow: 'auto', width: '50vw', height: "55vh"}} className="categoryScroll">*/}
        { category.map((element) => (
            <Accordion 
            style={{ backgroundColor: "#FFE2E9", borderRadius: 10}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    {/*동그란 이미지가 나오는 부분*/}
                    {element.teamMember.map((data) => (
                        <Avatar
                        src={data}
                        sx={{ width: "30px", height: "30px"}} />
                    ))}
                </AccordionSummary>
                <AccordionDetails>
                    <List sx={{ width: '40vw', left: '50%', transform: 'translateX(-50%)', bgcolor: 'background.paper' }}>
                        {/*task 렌더링 하는 부분 */}
                        {element.task.map((data) => (
                            <ListItem>
                            <Checkbox
                                icon={<AiOutlineCheckCircle style={{ color: "#B7B7B7" }} />}
                                checkedIcon={<AiFillCheckCircle style={{ color: "#FF9AB5" }} />}
                                size='3vh'
                                edge="start"
                                tabIndex={-1} />
                            {data}
                            </ListItem>    
                        ))}
                    </List>
                </AccordionDetails>
            </Accordion>
        ))}
        </Scrollbars>
    );
}

export default CategoryList;
