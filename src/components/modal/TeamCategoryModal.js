import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import "../../styles/TaskModal.css";
import FormControl from '@mui/material/FormControl';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemIcon } from "@mui/material";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from "react";
import { AiOutlinePlus } from  "react-icons/ai";
import Scrollbars from 'react-custom-scrollbars';
import { AiFillFolder } from "react-icons/ai";
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { width } from "@mui/system";

const useStyles = makeStyles((theme) => createStyles({
    select: { 
        "&.MuiOutlinedInput-root":{
            "& fieldset": {
                borderColor: "#555555"
            },
            "&.Mui-focused fieldset": {
                borderColor: "#FF9AB5"
            }
        }
    }
}))

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    },
};

function getStyles(name, personName, theme) {
        return {
        fontWeight:
            personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
        };
}

const TeamCategoryModal = ({open, close, curTeam, teamTask, addCategory, deleteCategory}) => {
    //카테고리 추가 부분
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    const [Arr, setArr] = useState([]);

    const [teamName, setTeamName] = useState("");
    const [clickIdx, setClickIdx] = useState();
    const [taskType, setTaskType] = useState("");
    const [clickMembers, setClickMembers] = useState([]);
    const handleChange = (event) => {
        const { target: { value },
        } = event;
        setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
        );
    };
    const onAddCategory = (personName) => {
        console.log("onAddCategory 호출");
        addCategory(personName);
    }
    const classes = useStyles()
    
    //팔로우 
    const [addpage, setAddPage] = useState(false);
    const [deletemodifypage, setDeleteModifyPage] = useState(false);
    const [listViewPage, setListViewPage] = useState(true);
    var t1;
    console.log(curTeam)
    t1 = teamTask.filter(x1 => curTeam.name === x1.name)[0];
    console.log(t1)
    let categoryStr = "";
    return (
        <div>
            <Dialog 
                open={open} 
                onClose={close}
                maxWidth={"100%"}
                maxHeight={"100%"}
                PaperProps={{ sx:{  width: "500px", height: "380px"}}}>
                <DialogTitle
                    style={{ backgroundColor: "#FF9AB5", color: "white" }}
                    sx={{
                        position: "relative",
                        textAlign: "center",
                        padding: "16px 16px 16px 16px",
                        fontWeight: "700"
                    }}>
                    카테고리
                </DialogTitle>
                <DialogContent style={{ alignItems: "center", marginTop: "2vh", overflow:"hidden"}}>
                    <Scrollbars>
                    <FormControl sx={{ width:"94%", height:"100%"}}>
                    <div>   {/* */}
                        { listViewPage ? 
                            <>         
                                <div>
                                    <span style={{ "fontSize" : 20, color: "#FF9AB5"}}> 
                                        {/* 카테고리 목록  */}
                                        <AiOutlinePlus 
                                            size="20" 
                                            color="pink"
                                            style={{"marginLeft" : "100%"}}
                                            onClick={() => {        
                                                setAddPage(true);
                                                setListViewPage(false);
                                                setDeleteModifyPage(false);     
                                            }}/>
                                    </span>
                                </div>
                                <List>
                                {t1.myTask.sort((a, b) => a.relatedMembers.length - b.relatedMembers.length)
                                    .map((element, index) => (
                                    <ListItem key={index} disablePadding>
                                        <ListItemButton key={index} onClick={() => {
                                            setTaskType("myTask");
                                            setClickIdx(index);
                                            setClickMembers(t1.myTask[index].relatedMembers);
                                            setTeamName(t1.name);
                                            setArr(t1.myTask[index].relatedMembers);
                                            setDeleteModifyPage(true);
                                            setAddPage(false);
                                            setListViewPage(false);
                                        }}>
                                            <ListItemIcon>
                                                <AiFillFolder />
                                            </ListItemIcon>
                                            { t1.myTask[index].relatedMembers.map((data) => {categoryStr += (data + "  "); return null;})}
                                            <ListItemText primary={categoryStr} />    
                                            { categoryStr = ""}
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                                {t1.otherTask.sort((a, b) => a.relatedMembers.length - b.relatedMembers.length)
                                    .map((element, index) => (
                                    <ListItem key={index} disablePadding>
                                        <ListItemButton key={index} onClick={() => {
                                            setTaskType("otherTask");
                                            setClickIdx(index);
                                            setClickMembers(t1.otherTask[index].relatedMembers);
                                            setTeamName(t1.name);
                                            setArr(t1.otherTask[index].relatedMembers);
                                            setDeleteModifyPage(true);
                                            setAddPage(false);
                                            setListViewPage(false);
                                        }}>
                                            <ListItemIcon>
                                                <AiFillFolder />
                                            </ListItemIcon>
                                            { t1.otherTask[index].relatedMembers.map((data) => { categoryStr += (data + "  "); return null; })}
                                            <ListItemText primary={categoryStr}/>    
                                            { categoryStr = ""}
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                                </List>
                            </>
                            : <></>}
                        { addpage ? 
                            <>
                                <div>
                                <span style={{ "fontSize" : 20, color: "#FF9AB5", marginLeft: "13%"}}> 
                                        카테고리 추가
                                </span>
                                <FormControl sx={{ m: 1, width: "100%", height: "100%" }}>
                                    <Select
                                    className={classes.select}
                                    labelId="demo-multiple-name-label"
                                    id="demo-multiple-name"
                                    multiple
                                    style={{width: "80%", marginLeft:"10%", marginTop: "5%"}}
                                    value={personName}
                                    onChange={handleChange}
                                    //input={<OutlinedInput label="Name" />}
                                    MenuProps={MenuProps}>
                                    {curTeam.memberList.map((name) => (
                                        <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, personName, theme)}
                                        >
                                        {name}
                                        </MenuItem>
                                    ))}
                                    </Select>
                                </FormControl>
                                </div> 
                                <div style={{ marginTop: "2vh"}}>
                                    <Button variant="contained" 
                                        style={{ color: "white", backgroundColor: "#FF9AB5", width: "30%", float: "left", marginLeft : "12%"}}      
                                        onClick={ () => {
                                            onAddCategory(personName);
                                            setAddPage(false);
                                            setListViewPage(true);    
                                            setDeleteModifyPage(false);
                                            setPersonName([]);
                                        }}>
                                        추가
                                    </Button>
                                    <Button    
                                        variant="contained" 
                                        style={{ color: "white", backgroundColor: "#FF9AB5", width: "30%", float: "right", marginRight : "8%"}}      
                                        onClick={() => { 
                                        setAddPage(false);
                                        setListViewPage(true);
                                        setDeleteModifyPage(false);
                                        setPersonName([]);
                                    }}>
                                        취소
                                    </Button>   
                                </div>
                            </>
                            : <></>}
                            {deletemodifypage ?  
                                <>
                                    <div>
                                    {Arr.map((data) => { categoryStr += (data + "  "); return null; })}
                                    <List>
                                        <ListItem 
                                        sx={{ marginLeft: "1.2vw"}}>
                                        {categoryStr}
                                        </ListItem>
                                    </List> 
                                    </div> 
                                    <div style={{marginTop: "2vh"}}>  
                                        <Button
                                            variant="contained"  
                                            style={{ color: "white", backgroundColor: "#FF9AB5", width: "30%", float:"left", marginLeft: "10%"}}        
                                            onClick={() => {
                                            deleteCategory(teamName, clickIdx, taskType, clickMembers);
                                            setAddPage(false);
                                            setListViewPage(true);
                                            setDeleteModifyPage(false);
                                            setPersonName([]);
                                        }}>
                                            삭제
                                        </Button>
                                        <Button
                                        variant="contained"  
                                        style={{ color: "white", backgroundColor: "#FF9AB5", width: "30%", float:"right", marginRight: "10%"}}        
                                        onClick={() => {
                                            setAddPage(false);
                                            setListViewPage(true);
                                            setDeleteModifyPage(false);
                                            setPersonName([]);
                                            console.log(Arr);
                                        }}>
                                            다시 목록으로
                                        </Button>
                                    </div> 
                                </>
                            : <></>}
                    </div>
                </FormControl>
                </Scrollbars>
                </DialogContent> 
                <DialogActions>
                    <Button               
                        variant="contained"       
                        style={{ color: "white", backgroundColor: "#aaa9a9"}} 
                        onClick={ () => {
                            setListViewPage(true);
                            setAddPage(false);
                            setDeleteModifyPage(false);
                            setPersonName([]);
                            close();
                        }}>
                        닫기
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default TeamCategoryModal;