import React from 'react';
import CustomTextField from './CustomTextField';
import "../../styles/TaskModal.css"

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
                        <div>
                            <span className="settingTitle">이름</span>
                            <CustomTextField id="standard-basic" defaultValue={selectedCategory.title} variant="standard" sx={{ width: "80%" }} onChange={e => title = e.target.value} />
                            </div>
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