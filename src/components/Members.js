import { Avatar, AvatarGroup } from '@chakra-ui/react';

function Members({memberList, memberData}) {
    console.log(memberData)
    return (
        <AvatarGroup size='sm' max={6} >
            {memberList.map((v,i)=>{
                var roote = memberData.filter((m)=>m.name === v)
                return (<Avatar key={i} src={roote[0].image} />);
            })}
        </AvatarGroup>
    );
}

export default Members;