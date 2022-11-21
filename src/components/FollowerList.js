import React from "react";
import {AiOutlinePlusCircle} from "react-icons/ai";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import Avatar from '@mui/material/Avatar';
import { useState } from "react";
import '../styles/Member.css';
import { IoPeopleCircleOutline } from "react-icons/io5";
import { FiUserPlus } from "react-icons/fi";
import { BorderStyle } from "@mui/icons-material";


const FollowerList = ({follower, onShowModal}) => {
    //const [Follower, setFollower] = useState(follower);
    for(let i = 0; i < follower.length; i++) {
        console.log(follower[i].name);
    }
    const [limit, setLimit] = useState(8);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    const allCount = follower.length
    console.log(allCount);
    const [count, setCount] = useState(follower.slice(offset, offset + limit).length)
    let maxCount = (allCount / 8);
    if(allCount % 8 > 0) {
        maxCount += 1;
    }
    maxCount = parseInt(maxCount);
    var i = 8-count>0 ? 8-count : 0
    const [plusIconNumber, setPlusIconNumber] = useState(i);
    console.log(plusIconNumber)
    return (
        <> 
            {/*왼쪽 버튼 */}
            <BsFillArrowLeftCircleFill 
                size="50" 
                color="#FF9AB5"
                className="Member"
                onClick={() => {
                    if(page !== 1) {
                        var i = 8-count>0 ? 8-count : 0;
                        setPage(page - 1);
                    }
                }}
                />

            {   
                follower.slice(offset, offset + limit).map((data) => (
                    <Avatar
                        alt="Remy Sharp"
                        src={data.image}
                        sx={{ width: "50px", height: "50px"}} 
                        className="Member"/>
                    ))
            }
            { 
                [...Array(plusIconNumber)].map((data) => 
                        <Avatar
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
                        setPage(page + 1);
                    }
                }}/>
            {/*프로필 변경하는 클릭 이벤트 지정(장훈) */} 
            <AiOutlinePlusCircle 
                    size="50" 
                    color="#FF9AB5"
                    className="Member"
                    onClick={onShowModal}/>
            <IoPeopleCircleOutline 
                size="50" 
                color="#FF9AB5"
                className="Member"
                onClick={() => { alert('프로필 아이콘 눌러짐');}}/>
        </>
    );
}

export default FollowerList;