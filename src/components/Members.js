import { Avatar, AvatarGroup } from '@chakra-ui/react';

function Members({icons}) {
    return (
        <AvatarGroup size='sm' max={6} >
            {icons.map((v,i)=>(<Avatar key={i} src={v.toString()} />))}
        </AvatarGroup>
    );
}

export default Members;