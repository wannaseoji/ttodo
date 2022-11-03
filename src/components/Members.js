import { Avatar, AvatarGroup } from '@chakra-ui/react';

function Members({icons}) {
    return (
        <AvatarGroup size='sm' max={5}>
            {icons.map((v,i)=>(<Avatar key={i} src={v.toString()} />))}
        </AvatarGroup>
    );
}

export default Members;