import React from 'react';
import '../styles/modal.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Modal = (props) => {
// 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header } = props;

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
            <section>
            <header>
                {header}
                <button className="close" onClick={close}>
                &times;
                </button>
            </header>
            <main>
                <div style={{display:"flex"}}>
                    <Button style={{flex: "1"}} variant="outlined" color="secondary" startIcon={<EditIcon />}>Edit</Button>
                    <Button style={{flex: "1"}} variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
                </div>
                <div>시간 설정</div>
            </main>
            <footer>
                <button className="close" onClick={close}>
                close
                </button>
            </footer>
            </section>
        ) : null}
        </div>
    );
};

export default Modal;