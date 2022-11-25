import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import CustomTextField from './CustomTextField';
import { makeStyles, createStyles } from '@material-ui/core/styles'

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

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
export default function TeamModal({ open, close, onNewTeam, followers, leader }) {
    const [teamName, setTeamName] = useState("");
    const [teamMessage, setTeamMessage] = useState("");
    const newTeam = () => {
        console.log("팀이름: " + teamName)
        if(teamName === "") {
            alert("팀 이름을 입력하세요.")
            return
        }
        onNewTeam(teamName, personName, teamMessage, leader)
        setPersonName([])
        setTeamName("")
        setTeamMessage("")
        close()
    }

    const theme = useTheme();
    const classes = useStyles()
    const [personName, setPersonName] = useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div className={open ? 'openModal modal' : 'modal'} >
            {open ? (
                <section>
                    <header> 팀 추가 </header>
                    <main>
                        <div>
                            <span className="settingTitle">팀 이름</span>
                            <CustomTextField id="standard-basic" variant="standard" onChange={e => setTeamName(e.target.value)}/>
                        </div>
                        <div>
                            <span className="settingTitle">팀 소개</span>
                            <CustomTextField id="standard-basic" variant="standard" onChange={e => setTeamMessage(e.target.value)}/>
                        </div>
                        <div>
                            <span className="settingTitle">멤버 추가</span>
                            <FormControl>
                                <Select
                                    className={classes.select}
                                    style={{ width: '18vw', height:'4vh'}}
                                    id="demo-simple-select"
                                    multiple
                                    value={personName}
                                    MenuProps={MenuProps}
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'Without label' }}>
                                    {
                                        followers.map((v, i) => (
                                            <MenuItem key={i} value={v} style={getStyles(v, personName, theme)}>
                                                {v}
                                            </MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        </div>
                    </main>
                    <footer>
                        <button className="add" onClick={newTeam}>추가</button>
                        <button className="cancel" onClick={close}>취소</button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
}