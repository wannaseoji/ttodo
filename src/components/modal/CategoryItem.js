import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import {AiFillFolder} from "react-icons/ai";;

function CategoryItem({ category }) {
    // const [selectedIndex, setSelectedIndex] = React.useState(1);

    // const handleListItemClick = (event, index) => {
    //     setSelectedIndex(index);
    // };
    console.log(`CategoryItem: ${category.title}`)
    return (
        <>
        {/* <Box sx={{ width: '100%', maxWidth: 200, bgcolor: 'background.paper' }}> */}
            {/* <List sx={{ width: '100%', maxWidth: '90%', bgcolor: 'background.paper' }} component="nav" aria-label="main mailbox folders"> */}
            <List sx={{ width: '100%', maxWidth: '92%', bgcolor: 'background.paper' }} component="nav" aria-label="main mailbox folders">
                <ListItemButton
                    // selected={selectedIndex === 0}
                    // onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemIcon>
                        <AiFillFolder />
                    </ListItemIcon>
                    <ListItemText primary={category.title} />
                </ListItemButton>
            </List>
            <Divider sx={{ width: '100%', maxWidth: '92%'}} />
        {/* </Box> */}
        </>
        
    );
}

export default CategoryItem;