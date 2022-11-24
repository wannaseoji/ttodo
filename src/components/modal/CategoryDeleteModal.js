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
const CategoryDeleteModal = ({open, close}) => {
    return (
        <div>
            <Dialog open={open} onClose={close}>
                <DialogTitle
                    style={{ backgroundColor: "pink", color: "#FFFFFF"}}
                    sx={{ alignItems : 'center'}}>
                    카테고리 삭제
                </DialogTitle>
                <DialogContent style={{ alignItems: "center", marginTop: "2vh"}}>
                <FormControl>
                    <div>
                        삭제
                    </div>
                </FormControl>
                </DialogContent> 
                <DialogActions>
                    <Button                         
                        style={{ color: "pink"}} >
                        삭제
                    </Button>
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
export default CategoryDeleteModal;