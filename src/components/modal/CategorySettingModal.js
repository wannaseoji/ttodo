import React from 'react';
import { TextField, styled } from '@mui/material';
import Scrollbars from 'react-custom-scrollbars';
import CategoryNameList from './CategoryNameList'
import { CloseTwoTone } from '@mui/icons-material';


function CategorySettingModal({ open, close, header, categories, onShowAddCategoryModal = f => f, modifyCategoryHandler = f => f }) {
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
                    <main style={{ margin: '0px' }}>
                        <Scrollbars style={{ width: '100%', height: "35vh", backgroundColor: "transparent", borderRadius: "0px 0px 10px 10px" }}>
                            <CategoryNameList categories={categories} modifyCategoryHandler={modifyCategoryHandler} />
                        </Scrollbars>
                    </main>
                    <footer>
                        <button className="add" onClick={onShowAddCategoryModal}>추가</button>
                        <button className="cancel" onClick={close}>취소</button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
}

export default CategorySettingModal