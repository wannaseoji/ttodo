import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function NoticeModal({open, close, onNewNotice}) {
    var notice;
    const newNotice = () => {
            onNewNotice(notice)
            close()
        }
    return (
        <div>
            <Dialog open={open} onClose={close}>
                <DialogTitle
                    style={{ backgroundColor: "pink", color: "#FFFFFF"}}
                    sx={{ alignItems : 'center'}}>
                    공지사항 추가
                </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="notice"
                        label="공지사항"
                        type="warmming"
                        fullWidth
                        variant="standard"
                        sx={{ input: { color: 'black' } }}
                        onChange={e=>notice = e.target.value}
                        />
                </DialogContent>
                <DialogActions>
                    <Button onClick={newNotice}>추가</Button>
                    <Button onClick={close}>취소</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}