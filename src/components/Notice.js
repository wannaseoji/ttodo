
import { useState } from "react";
import teamData from "../assets/team.json";
import { AiOutlinePlus } from 'react-icons/ai';
import {GoChevronLeft} from "react-icons/go";
import {GoChevronRight} from "react-icons/go";

function Notice() {
    //팀 목록에서 클릭한 팀을 나타낸다. 
    const [currentTeam, setCurrentTeam] = useState(teamData[0]);
    const [notice, setNotice] = useState(currentTeam.notice)
    const [page, setPage] = useState(1);
    let count = currentTeam.notice.length; //공지사항의 개수, 총 페이지의 개수
    
    return (
        <>
            <span style={{color:"#FF9AB5", fontWeight: "bold", fontSize:"20px", textAlign:"left", marginBottom:"0.8vh"}}>NOTICE</span>                
            <div style={{backgroundColor:"#F0F0F0", borderRadius: "10px", width:"95%", height:"43%", textAlign:"left", paddingTop:"1vh", paddingLeft:"2vw"}} >
                <div style={{textAlign:"right", paddingRight:"1vw"}}><button><AiOutlinePlus size="20" color="#FF9AB5" /></button></div>
                <span style={{color:"#555555", fontWeight: "bold", fontSize:"18px"}}>🔥 {notice[page-1]}</span>
                <table width="80" height="45">
                    <thead></thead>
                    <tbody>
                    <tr>
                        <td>
                            <GoChevronLeft size="25" color="#878787"
                                onClick={()=> {
                                    if(page!==1) setPage(page-1); 
                                }}/>
                        </td>
                        <td>
                            <GoChevronRight size="25" color="#878787" 
                                onClick={()=> {
                                    if(page!==count) setPage(page+1); 
                                }}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Notice;