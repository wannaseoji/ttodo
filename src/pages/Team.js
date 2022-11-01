import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { ChakraProvider } from '@chakra-ui/react';
import Members from './Members';
import {MdPushPin} from 'react-icons/md';

function Team() {
    return (
        <Card style={{backgroundColor:"pink", margin:"15px"}} sx={{ minWidth: 130, maxHeight: 220 }} >
            <CardContent>
                <Typography variant="h6" component="div" align="left">
                    RockIn
                </Typography>
                <hr/><br/>                
                <ChakraProvider>
                    <Members/>
                </ChakraProvider>

                <br/>
                <Typography variant="body2">
                    <button><MdPushPin /></button>극Rock도 RocK이다<br /> 
                    <button><MdPushPin /></button>나Rock도 RocK이다<br />
                    <button><MdPushPin /></button>오Rock도 RocK이다<br />
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Team;