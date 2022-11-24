import React from "react";
import {AiOutlinePlusCircle} from "react-icons/ai";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import Avatar from '@mui/material/Avatar';
import { useState } from "react";
import '../styles/Member.css';
import { AiOutlineSetting } from "react-icons/ai";


const MemberList = ({curTeam, onShowTeamMemberModal, onShowCategoryModal}) => {
    const [limit, setLimit] = useState(8);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    const allCount = curTeam.memberList.length
    const count = curTeam.memberList.slice(offset, offset + limit).length
    let maxCount = (allCount / 8);
    if(allCount % 8 > 0) {
        maxCount += 1;
    }
    maxCount = parseInt(maxCount);
    var i = 8-count //빈 원형 점선 아이콘 개수

    return (
        <> 
            {/*왼쪽 버튼 */}
            <BsFillArrowLeftCircleFill 
                size="50" 
                color="#FF9AB5"
                className="Member"
                onClick={() => {
                    if(page !== 1) {
                        setPage(page - 1);
                    }
                }}
                />

            {   
                curTeam.memberList.slice(offset, offset + limit).map((data,i) => (
                    <Avatar
                        key={i}
                        alt="Remy Sharp"
                        src={data + ".jpg"}
                        sx={{ width: "50px", height: "50px"}} 
                        className="Member"/>
                    ))
            }
            { 
                [...Array(i)].map((data,i) => 
                        <Avatar
                        key={i}
                        alt="Remy Sharp"
                        sx={{ width: "50px", height: "50px"}} 
                        style={{ background: "#FFFFFF", border: "5px dotted pink"}}
                        className="Member"/>
                )
            }
            {/*오른쪽 버튼 */}
            <BsFillArrowRightCircleFill 
                size="50" 
                color="#FF9AB5"
                className="Member"
                onClick={ () => { 
                    if(page !== maxCount) { 
                        var i = 8-count>0 ? 8-count : 0;
                        //setPlusIconNumber(i);
                        setPage(page + 1);
                    }
                }}/>
            <AiOutlinePlusCircle 
                    size="50" 
                    color="#FF9AB5"
                    className="Member"
                    onClick={onShowTeamMemberModal}/>
            <AiOutlineSetting 
                size="50" 
                color="#FF9AB5"
                className="Member"
                onClick={onShowCategoryModal}/>
        </>
    );
}

export default MemberList;