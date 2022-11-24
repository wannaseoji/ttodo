import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import { useState } from "react";

const FollowerModal = ({open, close, follower, member, createFollower}) => {
    const [search, setSearch] = useState("");
    const [booleanView, setBooleanView] = useState(false)
    const onChange = (e) => { 
        if(e.target.value === "") {
            setSearch("");
            setBooleanView(false);
        } else {
            setSearch(e.target.value);
            setBooleanView(true);
        }
    }

    const newFollower = () => { //추가 버튼을 눌렀을 경우,
        close();                //닫는다.(다시 눌렀을때 그대로 보이는것을 방지하기 위함)
        createFollower(search); //팔로워 추가
        setBooleanView(false);  //목록을 안보이게 하고
        setSearch("");          //search를 초기화하고
    }

    //팔로워가 아닌 맴버들을 필터해주는 로직
    const filterSearch = member.filter(x1 => follower.every(x2 => x1.name !== x2.name))
                        .filter((p) => {return p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase().replace(" ", ""))})
    return (
        <div>
            <Dialog open={open} onClose={close}>
                <DialogTitle
                    style={{ backgroundColor: "pink", color: "#FFFFFF"}}
                    sx={{ alignItems : 'center'}}>
                    팔로워 추가
                </DialogTitle>
                <DialogContent style={{ alignItems: "center", marginTop: "2vh"}}>
                <FormControl>
                    <input type="text" value={search} onChange={onChange}/>
                    <div>
                        {booleanView ? filterSearch.map(member => <div><span>{member.name}</span></div>) : <div></div>}
                    </div>
                </FormControl>
                </DialogContent> 
                <DialogActions>
                    <Button                         //추가하는 버튼
                        style={{ color: "pink"}} 
                        onClick={newFollower}>
                        추가
                    </Button>
                    <Button                         //닫는버튼
                        style={{ color: "pink"}} 
                        onClick={() => {
                        close()                     //닫고
                        setBooleanView(false);      //안보이게하고
                        setSearch("");              //input에 있는 값 비우기
                    }}>취소</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default FollowerModal;