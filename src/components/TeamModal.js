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

export default function TeamModal({open, close}) {

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
                sx={{ input: { color: 'black' } }}/>
            </DialogContent>
            <FormControl>
                <InputLabel id="demo-simple-select-label">맴버</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    style={{ width: '20vw', alignItems: 'center'}}>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <DialogActions>
                <Button onClick={close}>추가</Button>
                <Button onClick={close}>취소</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}