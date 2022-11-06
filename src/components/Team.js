import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { ChakraProvider } from '@chakra-ui/react';
import Members from './Members';
import { MdPushPin } from 'react-icons/md';

function Team({ data }) {
    return (
        <Card style={{ backgroundColor: "#FFE2E9", margin: "15px"}} sx={{ maxWidth: 190, minWidth: 190, maxHeight: 212, minHeight: 212 , borderRadius: 3 }} >
            <CardContent>
                <Typography component="div" align="left" sx={{fontWeight: 'bold'}}>
                    <b style={{color:"#555555", fontSize:"19px"}}>{data.name}</b>
                </Typography>

                <div style={{padding:"3px"}}></div>
                <ChakraProvider>
                    <Members icons={data.image} />
                </ChakraProvider>

                <div style={{padding:"3px"}}></div>
                <Typography variant="body2">
                    {data.notice.map((v, i) => 
                        <div align="left" key={i} >
                            <div style={{float:"left"}}><button><MdPushPin /></button></div>
                            <div style={{color:"#555555", fontSize:"15px", float:"left", width:"144px"}}>{v}</div>
                            <br /> 
                            <div style={{padding:"3px"}}></div>
                        </div>
                    )}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Team;