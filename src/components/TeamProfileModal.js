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
import CustomTextField from "./modal/CustomTextField";


const TeamProfileModal = ({open, close, modifyTeamProfile}) => {
    //각 text에 대한 상태변수
    const [name, setName] = useState("");
    const [intro, setIntro] = useState("");

    const nameTextOnChange = (e) => {
        setName(e.target.value);
    }

    const introTextOnChange = (e) => {
        setIntro(e.target.value);
    }

    const modify = () => {
        modifyTeamProfile(name, intro);          //팀 프로필을 변경하는 메소드 호출
        setName("");              
        setIntro("");
        close();
    }

    return (
        <div className={open ? 'openModal modal' : 'modal'} >
            {open ? (
                <section>
                    <header> 팀 프로필 변경 </header>
                    <main>
                        <div>
                            <span className="settingTitle">팀 이름</span>
                            <CustomTextField id="standard-basic" variant="standard" defaultValue={name} onChange={nameTextOnChange}/>
                        </div>
                        <div>
                        <span className="settingTitle">팀 소개</span>
                            <CustomTextField id="standard-basic" variant="standard" defaultValue={intro} onChange={introTextOnChange}/>
                        </div>
                    </main>
                    <footer>
                        <button className="monify" onClick={modify}>변경</button>
                        <button 
                            className="cancel"
                            onClick={() => {
                                close();                     
                                setName("");              
                                setIntro("");
                            }}>취소</button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
}

export default TeamProfileModal;