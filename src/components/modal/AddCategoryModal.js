import React from 'react';
import { TextField, styled } from '@mui/material';
import Scrollbars from 'react-custom-scrollbars';
import CategoryNameList from './CategoryNameList'
import { CloseTwoTone } from '@mui/icons-material';

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



function AddCategoryModal({open, close, header, onNewCategory=f=>f}){
    let title = "";
    const addNewCategory = () => { 
        // console.log(`aaaaaaaaaaaaaaaaa   ${time}`)
        // if (time === "none:none" || time == "none" || time == "ne:none") {
        //   hour = "none"
        //   minute = "none"
        // }
        // else {
        //   hour = parseInt(time.split(":")[0]).toString()
        //   minute = time.split(":")[1]
        // }
    
        onNewCategory(title)
        close()
    }

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
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
                        <div><span className="settingTitle">카테고리</span><StyledTextField id="standard-basic" label="" variant="standard" sx={{ width: "80%" }} onChange={e => title = e.target.value}/></div>
                    </main>
                    <footer>
                        <button className="add" onClick={addNewCategory}>add</button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
}

export default AddCategoryModal;