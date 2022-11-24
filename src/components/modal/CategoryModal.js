import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import { useState } from "react";

const CategoryModal = ({open, close, onShowCategoryAddModal, onShowCategoryDeleteModal, onShowCategoryModifyModal}) => {
    return (
        <div>
            <Dialog open={open} onClose={close}>
                <DialogTitle
                    style={{ backgroundColor: "pink", color: "#FFFFFF"}}
                    sx={{ alignItems : 'center'}}>
                    카테고리 설정
                </DialogTitle>
                <DialogContent style={{ alignItems: "center", marginTop: "2vh"}}>
                <FormControl>
                    <div>
                        <Button 
                            variant="contained" 
                            style={{"backgroundColor": "pink", "marginLeft": "1vw", "marginRight": "1vw"}}
                            onClick={onShowCategoryAddModal}>
                                추가
                        </Button>
                        <Button 
                            variant="contained" 
                            style={{"backgroundColor": "pink", "marginLeft": "1vw", "marginRight": "1vw"}}
                            onClick={onShowCategoryModifyModal}>
                                수정
                        </Button>
                        <Button 
                            variant="contained" 
                            style={{"backgroundColor": "pink", "marginLeft": "1vw", "marginRight": "1vw"}}
                            onClick={onShowCategoryDeleteModal}>
                                삭제
                        </Button>
                    </div>
                </FormControl>
                </DialogContent> 
                <DialogActions>
                    <Button                         
                        style={{ color: "pink"}} 
                        onClick={close}>
                        취소
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default CategoryModal;