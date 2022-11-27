import Team from "../components/Team";
import {BsPlusCircleFill} from "react-icons/bs";
import Scrollbars from 'react-custom-scrollbars';

function TeamEditList({onShowModal, teamData, changeCurTeamIdx, member}) {
    return (
        <>
        <Scrollbars thumbSize={90} autoHeightMax={"70vh"} autoHeight={true}>
            {
                teamData.map((v,i) => (
                    <div key={i} style={{width:"14vw", height:"33vh", display:"inline", float:"left", marginLeft:"1.6vw"}}>
                        <button onClick={()=>changeCurTeamIdx(i)}>{<Team key={i} data={v} memberData={member}/>}</button>
                    </div>
                )
                )
            }
            {
                <div key={10} style={{width:"14vw", height:"23vh", display:"inline", float:"left", marginLeft:"1.6vw", marginTop:"10.3vh"}}>
                    <center><button onClick={onShowModal}><BsPlusCircleFill size="60" color="#FEA4BC" /></button></center>
                </div>
            }
        </Scrollbars>
        </>
    )
}

export default TeamEditList;