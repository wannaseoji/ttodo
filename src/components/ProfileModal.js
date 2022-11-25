import React from "react";
import Button from '@mui/material/Button';
import { TextField, styled } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import { useState } from "react";
import "../styles/TaskModal.css"

// 프로필을 변경하는 Modal
const StyledTextField = styled(TextField)({
    "&:hover .MuiInput-underline": {
      borderBottomColor: "gray"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#FF9AB5"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white"
      },
      "&:hover fieldset": {
        borderColor: "white",
        borderBottomColor: "white",
        borderWidth: 2
      },
      "&.Mui-focused fieldset": {
        borderColor: "white"
      }
    }
  });

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
        <div className={open ? 'openModal modal' : 'modal'} >
            {open ? (
                <section className="profileModal">
                    <header> 프로필 변경 </header>
                    <main style={{paddingLeft:"1vw"}}>
                    {/* <FormControl> */}
                        <div>
                            <span className="settingTitle" >
                                <b>name</b>
                            </span>
                            <span>
                            <StyledTextField 
                                id="standard-basic" 
                                label="" variant="standard" 
                                sx={{ width: "100%" }}
                                value={name} 
                                onChange={nameTextOnChange}/>
                            </span>
                        </div>
                        <div>
                            <span className="settingTitle">
                                <b>email</b>
                            </span>
                            <span>
                            <StyledTextField 
                                id="standard-basic" 
                                label="" variant="standard" 
                                sx={{ width: "100%" }}
                                value={email} 
                                onChange={emailTextOnChange}/>
                            </span>
                        </div>
                        <div>
                            <span className="settingTitle">
                                <b>intro</b>
                            </span>
                            <span>
                            <StyledTextField 
                                id="standard-basic" 
                                label="" variant="standard" 
                                sx={{ width: "100%" }}
                                value={intro} 
                                onChange={introTextOnChange}/>
                            </span>
                        </div>
                    {/* </FormControl> */}
                    </main> 
                    <footer>
                        <button className="modify" onClick={modify}>modify</button>
                        <button 
                            className="cancel" 
                            onClick={() => {
                                close();                     
                                setName("");              
                                setEmail("");
                                setIntro("");
                        }}>cancel</button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
}

export default ProfileModal;