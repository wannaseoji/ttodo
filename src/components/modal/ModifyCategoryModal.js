import { TextField, styled } from '@mui/material';
import React from 'react';
import "../../styles/TaskModal.css"

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

function ModifyCategoryModal({ open, close, header, categories, selectedCategory = f => f, onModifyCategory = f => f, onDeleteCategory = f => f }) {
    let title = selectedCategory.title;

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
        const modifiedCategory = { ...selectedCategory, title }
        onModifyCategory(modifiedCategory)
        toast.dismiss()
        close()
    }

    const modifyNewCategory = () => {
        if(categories.findIndex(category => category.title === title) !== -1) notify()
        else nextStep(title)
    }

    const closeEvent=() => {
        toast.dismiss()
        close()
    }

    return (
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
                        <div><span className="settingTitle">이름</span><StyledTextField id="standard-basic" label="" defaultValue={selectedCategory.title} variant="standard" sx={{ width: "80%" }} onChange={e => title = e.target.value} /></div>
                    </main>
                    <footer>
                        <button className="modify" onClick={modifyNewCategory}>수정</button>
                        <button className="delete" onClick={onDeleteCategory}>삭제</button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
}


export default ModifyCategoryModal;