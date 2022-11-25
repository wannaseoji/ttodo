import { TextField, styled } from '@mui/material';
import React from 'react';
import "../../styles/TaskModal.css"

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

function ModifyCategoryModal({ open, close, header, selectedCategory = f => f, onModifyCategory = f => f, onDeleteCategory = f => f }) {
    let title = selectedCategory.title;

    const modifyNewCategory = () => {
        const modifiedCategory = { ...selectedCategory, title }
        onModifyCategory(modifiedCategory)
        close()
    }

    return (
        <div className={open ? 'openModal modal' : 'modal'} >
            {open ? (
                <section>
                    <header>
                        {header}
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>
                        <div><span className="settingTitle">이름</span><StyledTextField id="standard-basic" label="" defaultValue={selectedCategory.title} variant="standard" sx={{ width: "80%" }} onChange={e => title = e.target.value} /></div>
                    </main>
                    <footer>
                        <button className="modify" onClick={modifyNewCategory}>modify</button>
                        <button className="delete" onClick={onDeleteCategory}>delete</button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
}


export default ModifyCategoryModal;