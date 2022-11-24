import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const OptionsModal = (props) => {
    const { open, close, header } = props;
    
    return (
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
                <div id='optionbtn_container'>
                    <Button className='optionbtn' variant="outlined" color="secondary" startIcon={<EditIcon />}>Edit</Button>
                    <Button className='optionbtn' variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
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

export default OptionsModal;