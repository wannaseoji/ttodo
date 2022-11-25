import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CustomTextField from './CustomTextField';

export default function NoticeModal({open, close, onNewNotice}) {
    var notice;
    const newNotice = () => {
            onNewNotice(notice)
            close()
        }
    return (
        <div className={open ? 'openModal modal' : 'modal'} >
            {open ? (
                <section>
                    <header>
                        공지사항 추가
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>
                        <div>
                            <span className="settingTitle">공지 내용</span>
                            <CustomTextField id="standard-basic" variant="standard" onChange={e=>notice = e.target.value}/>
                        </div>
                    </main>
                    <footer>
                        <button className="add" onClick={newNotice}>추가</button>
                        <button className="cancel" onClick={close}>취소</button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
}