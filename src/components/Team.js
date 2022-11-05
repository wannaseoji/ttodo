import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { ChakraProvider } from '@chakra-ui/react';
import Members from './Members';
import { MdPushPin } from 'react-icons/md';

function Team({ data }) {
    return (
        <Card style={{ backgroundColor: "pink", margin: "15px" }} sx={{ maxWidth: 200, maxHeight: 220, minWidth: 180, minHeight: 210 }} >
            <CardContent>
                <Typography variant="h7" component="div" align="left">
                    <b>{data.name}</b>
                </Typography>
                <hr /><br />
                <ChakraProvider>
                    <Members icons={data.image} />
                </ChakraProvider>

                <br />
                <Typography variant="body2">
                    {data.notice.map((v, i) => <div align="left" key={i}><button><MdPushPin /></button>{v}<br /></div>)}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Team;