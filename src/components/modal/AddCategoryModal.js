import React from 'react';
import CustomTextField from './CustomTextField';

function AddCategoryModal({open, close, header, onNewCategory=f=>f}){
    let title = "";
    const addNewCategory = () => { 
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
                        <div>
                            <span className="settingTitle">카테고리</span>
                            <CustomTextField  id="standard-basic" variant="standard" onChange={e => title = e.target.value}/>
                        </div>
                    </main>
                    <footer>
                        <button className="add" onClick={addNewCategory}>추가</button>
                        <button className="cancel" onClick={close}>취소</button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
}

export default AddCategoryModal;