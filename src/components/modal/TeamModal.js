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

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}
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
    const [teamName, setTeamName] = useState()
    const [teamMessage, setTeamMessage] = useState()
    const newTeam = () => {
        console.log(teamName)
        onNewTeam(teamName, personName, teamMessage, leader)
        setPersonName([])
        close()
    }

    const theme = useTheme();
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
        <div>
            <Dialog open={open} onClose={close}>
                <DialogTitle
                    style={{ backgroundColor: "pink", color: "#FFFFFF" }}
                    sx={{ alignItems: 'center' }}>
                    팀 추가
                </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="팀 이름"
                        type="warmming"
                        fullWidth
                        variant="standard"
                        sx={{ input: { color: 'black' } }}
                        onChange={e => setTeamName(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="teamProfileMessage"
                        label="팀 프로필 메시지"
                        type="warmming"
                        fullWidth
                        variant="standard"
                        sx={{ input: { color: 'black' } }}
                        onChange={e => setTeamMessage(e.target.value)} />
                </DialogContent>
                <DialogContent style={{ alignItems: "center" }}>
                    <FormControl>
                        <InputLabel id="demo-simple-select-label"
                            style={{ marginLeft: "0.3vw" }}
                        > 멤버</InputLabel>
                        <Select
                            style={{ width: '20vw', alignItems: 'center', marginLeft: "0.3vw" }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            multiple
                            value={personName}
                            MenuProps={MenuProps}
                            onChange={handleChange}
                            input={<OutlinedInput label="Name" />}
                        >
                            {
                                followers.map((v, i) => (
                                    <MenuItem key={i} value={v.name} style={getStyles(v.name, personName, theme)}>
                                        {v.name}
                                    </MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={newTeam}>추가</Button>
                    <Button onClick={close}>취소</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}