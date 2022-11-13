import { Avatar, AvatarGroup } from '@chakra-ui/react';
import memberData from '../assets/Member.json';

function Members({memberList}) {
    return (
        <AvatarGroup size='sm' max={6} >
            {/* <img src='crown.png' /> */}
            {memberList.map((v,i)=>{
                var roote = memberData.filter((m)=>m.name === v)
                return (<Avatar key={i} src={roote[0].image} />);
            })}
        </AvatarGroup>
    );
}

export default Members;