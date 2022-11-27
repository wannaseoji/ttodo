import React from "react";
import { TextField, styled } from '@mui/material';

import { useState } from "react";

const StyledTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#555555"
        },
        "&.Mui-focused fieldset": {
            borderColor: "#FF9AB5",
            borderWidth: 2
        },
        "& .MuiInputBase-input":{
            height:"0.7em"
        }
    }
});

const MemberAddModal = ({ open, close, createTeamMember, followers, curTeam }) => {
    const [search, setSearch] = useState("");
    const [booleanView, setBooleanView] = useState(false)
    //text가 입력이 될때 검색이 되게 한다.
    const onChange = (e) => {
        if (e.target.value === "") {
            setSearch("");
            setBooleanView(false);
        } else {
            setSearch(e.target.value);
            setBooleanView(true);
        }
    }

    const newFollower = () => { //추가 버튼을 눌렀을 경우,
        close();                //닫는다.(다시 눌렀을때 그대로 보이는것을 방지하기 위함)
        createTeamMember(search);
        setBooleanView(false);  //목록을 안보이게 하고
        setSearch("");          //search를 초기화하고
    }
    
    //팔로워중 팀맴버가 아닌 사람들을 필터링
    const filterSearch = followers
                        .filter(x1 => curTeam.memberList.every(x2 => x1 !== x2))
                        .filter((p) => {return p.toLocaleLowerCase().includes(search.toLocaleLowerCase().replace(" ", ""))})
    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header> 팀원 추가 </header>
                    <main>
                        <div style={{justifyContent: "center"}}>
                        <span style={{marginRight:"2vw", fontWeight:800}}>친구 검색</span>
                        <StyledTextField id="outlined-basic" value={search} onChange={onChange} variant="outlined"/>
                        </div>
                        <div style={{justifyContent: "center"}}>
                        {booleanView ? filterSearch.map(member => <div><span>{member}&nbsp;&nbsp;</span></div>) : <div></div>}
                        </div>
                    </main>
                    <footer>
                        <button 
                        className="add" 
                        onClick={newFollower}>추가</button>
                        <button 
                            className="cancel" 
                            onClick={() => {
                                close()                     //닫고
                                setBooleanView(false);      //안보이게하고
                                setSearch("");              //input에 있는 값 비우기
                            }}>
                        취소
                        </button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
}

export default MemberAddModal;