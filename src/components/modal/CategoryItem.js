import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { AiFillFolder } from "react-icons/ai";

function CategoryItem({ category, modifyCategoryHandler = f => f }) {
    const modifyCategory = () => modifyCategoryHandler(category)

    return (
        <>
            <List sx={{ width: '100%', maxWidth: '92%', bgcolor: 'background.paper' }} component="nav" aria-label="main mailbox folders">
                <ListItemButton onClick={modifyCategory}>
                    <ListItemIcon>
                        <AiFillFolder />
                    </ListItemIcon>
                    <ListItemText primary={category.title} />
                </ListItemButton>
            </List>
            <Divider sx={{ width: '100%', maxWidth: '92%' }} />
        </>
    );
}

export default CategoryItem;