import React from 'react';
import { TextField, styled } from '@mui/material';
import Scrollbars from 'react-custom-scrollbars';
import CategoryNameList from './CategoryNameList'
import { CloseTwoTone, Visibility } from '@mui/icons-material';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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



function AddCategoryModal({open, close, header, categories, onNewCategory=f=>f}){
    let title = "";
    const notify = () => toast.error(`"${title}" already exist`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

    const nextStep = (title) => {
        onNewCategory(title)
        toast.dismiss()
        close()
    }

    const addNewCategory = () => { 
        console.log(`title : ${title}`)
        if(categories.findIndex(category => category.title === title) !== -1) notify()
        else nextStep(title)
    }

    const closeEvent=() => {
        toast.dismiss()
        close()
    }

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal modal' : 'modal'} >
            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss={false} draggable pauseOnHover theme="colored" />
            {open ? (
                <section>
                    <header>
                        {header}
                        <button className="close" onClick={closeEvent}>
                            &times;
                        </button>
                    </header>
                    <main>
                        <div><span className="settingTitle">카테고리</span><StyledTextField id="standard-basic" label="" variant="standard" sx={{ width: "80%" }} onChange={e => title = e.target.value}/></div>
                    </main>
                    <footer>
                        <button className="add" onClick={addNewCategory}>추가</button>
                        <button className="cancel" onClick={closeEvent}>닫기</button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
}

export default AddCategoryModal;