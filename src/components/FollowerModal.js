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

const FollowerModal = ({ open, close, follower, member, createFollower, myProfile }) => {
    const [search, setSearch] = useState("");
    const [booleanView, setBooleanView] = useState(false)
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
        createFollower(search); //팔로워 추가
        setBooleanView(false);  //목록을 안보이게 하고
        setSearch("");          //search를 초기화하고
    }

    //팔로워가 아닌 맴버들을 필터해주는 로직(나 자신 제외)
    const filterSearch = member
        .filter((data) => data.name !== myProfile.name)
        .filter(x1 => follower.every(x2 => x1.name !== x2))
        .filter((p) => { return p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase().replace(" ", "")) })
    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header> 팔로워 추가 </header>
                    <main>
                        <div style={{justifyContent: "center"}}>
                        <span style={{marginRight:"2vw", fontWeight:800}}>친구 검색</span>
                        <StyledTextField id="outlined-basic" value={search} onChange={onChange} variant="outlined"/>
                        </div>
                        <div style={{justifyContent: "center"}}>
                        {booleanView ? filterSearch.map(member => <div><span>{member.name}&nbsp;&nbsp;</span></div>) : <div></div>}
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

export default FollowerModal;