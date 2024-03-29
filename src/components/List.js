import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import Avatar from '@mui/material/Avatar';
import { useState } from "react";
import '../styles/Member.css';
import { AiOutlineSetting } from "react-icons/ai";
import { AiFillFolderAdd } from "react-icons/ai";

const List = ({ list, onShowModal, onShowCategoryModal, flag }) => {
    const [limit, setLimit] = useState(7);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    const allCount = list.length
    const count = list.slice(offset, offset + limit).length
    let maxCount = (allCount / 7);
    if (allCount % 7 > 0) {
        maxCount += 1;
    }
    maxCount = parseInt(maxCount);
    var i = 7 - count //빈 원형 점선 아이콘 개수

    return (
        <>
            {/*왼쪽 버튼 */}
            <BsFillArrowLeftCircleFill
                size="30"
                color="#FF9AB5"
                className="Member"
                onClick={() => {
                    if (page !== 1) {
                        setPage(page - 1);
                    }
                }}
            />

            {
                list.slice(offset, offset + limit).map((data, i) => (
                    <Avatar
                        key={i}
                        title={data}
                        alt="Remy Sharp"
                        src={data + ".jpg"}
                        sx={{ width: "6vh", height: "6vh"}}
                        className="Member" />
                ))
            }
            {
                [...Array(i)].map((data, i) =>
                    <Avatar
                        key={i}
                        alt="Remy Sharp"
                        sx={{ width: "6vh", height: "6vh"}}
                        style={{ background: "#FFFFFF", border: "4px dotted pink" }}
                        className="Member" />
                )
            }
            <BsFillArrowRightCircleFill
                size="30"
                color="#FF9AB5"
                className="Member"
                onClick={() => {
                    if (page !== maxCount) {
                        var i = 8 - count > 0 ? 8 - count : 0;
                        //setPlusIconNumber(i);
                        setPage(page + 1);
                    }
                }} />
            <AiOutlinePlusCircle
                size="30"
                color="#FF9AB5"
                className="Member"
                style={{marginRight:"0.5vw"}}
                onClick={onShowModal} />
            {flag === "true"?
            <AiFillFolderAdd
                size="30"
                color="#FF9AB5"
                className="Member"
                style={{marginRight:"0.5vw"}}
                onClick={onShowCategoryModal} />
                :<></>}
        </>
    );
}

export default List;