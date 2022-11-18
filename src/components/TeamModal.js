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

export default function TeamModal({open, close, onNewTeam, followers, leader}) {
    var teamName = "";
    var teamMessage = "";
    var memberList = [];
    
    const newTeam = () => {
            onNewTeam(teamName, memberList, teamMessage, leader)
            close()
        }

    return (
        <div>
            <Dialog open={open} onClose={close}>
                <DialogTitle
                    style={{ backgroundColor: "pink", color: "#FFFFFF"}}
                    sx={{ alignItems : 'center'}}>
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
                        onChange={e=>teamName = e.target.value}
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
                        onChange={e=>teamMessage = e.target.value}/>
                </DialogContent>
                <FormControl>
                    <InputLabel id="demo-simple-select-label"
                    style={{marginLeft: "1.5vw"}}
                    > 맴버</InputLabel>
                    <Select
                        style={{  width: '20vw', alignItems: 'center', marginLeft: "1.5vw"}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age">
                            {
                                followers.map(v=>(
                                    <MenuItem value={10}>{v.name}</MenuItem>
                                ))
                            }
                    </Select>
                </FormControl>
                <DialogActions>
                    <Button onClick={newTeam}>추가</Button>
                    <Button onClick={close}>취소</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}