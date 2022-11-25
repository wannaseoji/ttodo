import Team from "../components/Team";
import {BsPlusCircleFill} from "react-icons/bs";
import Scrollbars from 'react-custom-scrollbars';

function TeamEditList({onShowModal, teamData, changeCurTeamIdx, member}) {
    return (
        <>
        <Scrollbars thumbSize={90} autoHeightMax={"70vh"} autoHeight={true}>
            {
                teamData.map((v,i) => (
                    <div key={i} style={{width:"190", height:"195", display:"inline", float:"left", marginLeft:"1.5vw"}}>
                        <button onClick={()=>changeCurTeamIdx(i)}>{<Team key={i} data={v} memberData={member}/>}</button>
                    </div>
                )
                )
            }
            {
                <div key={10} style={{width:"190", height:"195", display:"inline", float:"left", marginLeft:"6.3vw", marginTop:"12vh", marginBottom:"12vh"}}>
                    <center><button onClick={onShowModal}><BsPlusCircleFill size="60" color="#FEA4BC" /></button></center>
                </div>
            }
        </Scrollbars>
        </>
    )
}

export default TeamEditList;