import { IoMdAddCircleOutline } from 'react-icons/io';
import {GoChevronLeft} from "react-icons/go";
import {GoChevronRight} from "react-icons/go";

//팀 목록에서 클릭한 팀을 인자로 받아야 한다.
function Notice({onShowModal, notices, page, setPage}) {
    let count = notices.length; //공지사항의 개수, 총 페이지의 개수
    return (
        <>
            <span style={{color:"#FF9AB5", fontWeight: "bold", fontSize:"25px", textAlign:"left", marginBottom:"0.8vh"}}>
                NOTICE <IoMdAddCircleOutline size="3.1vh" color="#FF9AB5" onClick={onShowModal} style={{display:"inline"}}/>  
            </span>    
            <div style={{backgroundColor:"#F0F0F0", borderRadius: "10px", width:"95%", height:"43%", textAlign:"left", paddingTop:"1vh", paddingLeft:"2vw"}} >
                <div style={{align: "right", paddingLeft:"34vw", paddingTop:"0.3vh"}}>
                    <GoChevronLeft size="25" color="#878787" style={{display:"inline"}}
                            onClick={()=> {
                                if(page!==1) setPage(page-1); 
                            }}/>

                    <GoChevronRight size="25" color="#878787" style={{display:"inline", marginRight:"1vw" }}
                        onClick={()=> {
                            if(page!==count && count!==0 ) setPage(page+1); 
                        }}/>
                </div>
                <div style={{color:"#555555", fontWeight: "bold", fontSize:"18px"}}>{count==0?"공지사항이 존재하지 않습니다.":"🔥  "}{notices[page-1]}</div>
                <div style={{paddingLeft:"17.5vw"}}>
                    
                </div>
            </div>
        </>
    )
}

export default Notice;