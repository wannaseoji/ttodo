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

/*
    프로필을 변경하는 Modal
 */
const ProfileModal = ({myProfile, open, close, modifyProfile}) => {
    //각 text에 대한 상태변수
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [intro, setIntro] = useState("");

    const nameTextOnChange = (e) => {
        setName(e.target.value);
    }

    const emailTextOnChange = (e) => {
        setEmail(e.target.value);
    }

    const introTextOnChange = (e) => {
        setIntro(e.target.value);
    }

    const modify = () => {
        modifyProfile(name, email, intro);
        setName("");              
        setEmail("");
        setIntro("");
        close();
    }

    return (
        <div>
            <Dialog open={open} onClose={close}>
                <DialogTitle
                    style={{ backgroundColor: "pink", color: "#FFFFFF"}}
                    sx={{ alignItems : 'center'}}>
                    프로필 변경
                </DialogTitle>
                <DialogContent style={{ alignItems: "center", marginTop: "2vh"}}>
                <FormControl>
                    <div style={{"marginBottom": "1vh", "marginTop": "1vh"}}>
                        <span style={{"color" : "pink", "marginRight": "0.5vw"}}>
                            <b>name</b>
                        </span>
                        <span>
                            <input 
                                type="text" 
                                style={{"border-bottom": "0.5px solid pink"}}
                                value={name} 
                                onChange={nameTextOnChange}/>
                        </span>
                    </div>
                    <div style={{"marginBottom": "1vh", "marginTop": "1vh"}}>
                        <span style={{"color" : "pink", "marginRight": "0.5vw"}}>
                            <b>email</b>
                        </span>
                        <span>
                            <input 
                                type="text" 
                                style={{"border-bottom": "0.5px solid pink"}}
                                value={email} 
                                onChange={emailTextOnChange}/>
                        </span>
                    </div>
                    <div style={{"marginBottom": "1vh", "marginTop": "1vh"}}>
                        <span style={{"color" : "pink", "marginRight": "0.7vw"}}>
                            <b>intro</b>
                        </span>
                        <span>
                            <input 
                                type="text" 
                                style={{"border-bottom": "0.5px solid pink"}}
                                value={intro}
                                onChange={introTextOnChange}/>
                        </span>
                    </div>
                </FormControl>
                </DialogContent> 
                <DialogActions>
                    <Button                         //추가하는 버튼
                        style={{ color: "pink"}}
                        onClick={modify}>
                        변경
                    </Button>
                    <Button                         //닫는버튼
                        style={{ color: "pink"}} 
                        onClick={() => {
                        close();                     
                        setName("");              
                        setEmail("");
                        setIntro("");
                    }}>
                        취소
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ProfileModal;