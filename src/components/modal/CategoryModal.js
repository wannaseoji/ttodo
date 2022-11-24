import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from "react";
import { AiOutlinePlus } from  "react-icons/ai";

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

const CategoryModal = ({open, close, curTeam, teamTask, addCategory}) => {
    //카테고리 추가 부분
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

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
    //팔로우 
    const [addpage, setAddPage] = useState(false);
    const [deletemodifypage, setDeleteModifyPage] = useState(false);
    const [listViewPage, setListViewPage] = useState(true);
    var t1;
    console.log(curTeam)
    t1 = teamTask.filter(x1 => curTeam.name === x1.name)[0];
    console.log(t1)
    let categoryStr = ""
    return (
        <div>
            <Dialog 
                open={open} 
                onClose={close}
                maxWidth={"100vw"}
                maxHeight={"100vh"}
                PaperProps={{ sx:{  width: "50%", height: "70%"}}}
                >
                <DialogTitle
                    style={{ backgroundColor: "pink", color: "#FFFFFF"}}
                    sx={{ alignItems : 'center'}}>
                    카테고리 설정
                </DialogTitle>
                <DialogContent style={{ alignItems: "center", marginTop: "2vh"}}>
                <FormControl>
                    <div style={{ "marginLeft": "46vw"}}>
                        <AiOutlinePlus 
                            size="20" 
                            color="pink"
                            onClick={() => {        //+버튼을 눌렀을때,
                                setAddPage(true);
                                setListViewPage(false);
                                setDeleteModifyPage(false);     //삭제/수정 페이지
                            }}/>
                    </div>
                    <div>   {/* */}
                        { listViewPage ? 
                            <>         
                                <List>
                                {t1.myTask.sort((a, b) => a.relatedMembers.length - b.relatedMembers.length)
                                    .map((element, index) => (
                                    <ListItem disablePadding>
                                        <ListItemButton onClick={() => {
                                            setDeleteModifyPage(true);
                                            setAddPage(false);
                                            setListViewPage(false);
                                        }}>
                                            { t1.myTask[index].relatedMembers.map((data) => {categoryStr += (data + "  ")})}
                                            <ListItemText primary={categoryStr} />    
                                            { categoryStr = ""}
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                                {t1.otherTask.sort((a, b) => a.relatedMembers.length - b.relatedMembers.length)
                                    .map((element, index) => (
                                    <ListItem disablePadding>
                                        <ListItemButton onClick={() => {
                                            setDeleteModifyPage(true);
                                            setAddPage(false);
                                            setListViewPage(false);
                                        }}>
                                            { t1.otherTask[index].relatedMembers.map((data) => {categoryStr += (data + "  ")})}
                                            <ListItemText primary={categoryStr} />    
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
                                <FormControl sx={{ m: 1, width: 300 }}>
                                    <InputLabel id="demo-multiple-name-label">Name</InputLabel>
                                    <Select
                                    labelId="demo-multiple-name-label"
                                    id="demo-multiple-name"
                                    multiple
                                    value={personName}
                                    onChange={handleChange}
                                    input={<OutlinedInput label="Name" />}
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
                                <div>
                                <Button variant="contained" 
                                    style={{"backgroundColor" : "pink"}}
                                    onClick={ () => {
                                        onAddCategory(personName);
                                        setAddPage(false);
                                        setListViewPage(true);    
                                        setPersonName([]);
                                    }}>
                                    추가
                                </Button>
                                <Button 
                                    variant="contained" 
                                    style={{"backgroundColor" : "pink"}}
                                    onClick={() => { 
                                    setAddPage(false);
                                    setListViewPage(true);
                                    setPersonName([]);
                                }}>
                                    취소
                                </Button>   
                                </div>
                            </>
                            : <></>}
                    </div>
                </FormControl>
                </DialogContent> 
                <DialogActions>
                    <Button                         //닫는버튼
                        style={{ color: "pink"}} 
                        onClick={close}>
                        취소
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default CategoryModal;