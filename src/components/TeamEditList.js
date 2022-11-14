import Team from "../components/Team";
import { useState } from "react";
import {BsPlusCircleFill} from "react-icons/bs";
import {GoChevronLeft} from "react-icons/go";
import {GoChevronRight} from "react-icons/go";
// import teamData from "../assets/team.json"

function TeamEditList({onShowModal, teamData}) {
    
    const [teams, setTeams] = useState(teamData);

    const [limit, setLimit] = useState(4);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    let count = teamData.length; //팀의 개수
    let maxCount = (count / 4); //총 페이지 개수
    if(count / 4 > 0) { 
        maxCount += 1;
    }

    maxCount = parseInt(maxCount);

    var list;
    list = teams.slice(offset, offset + limit);

    return (
        <table width="480" height="550" style={{backgroundColor:"#F0F0F0", borderRadius: "10px"}}>
        {
            list.length === 0 ?
            <><thead>
                <tr>
                    <td width="240" height="275">
                        <center>{<button onClick={onShowModal}><BsPlusCircleFill size="60" color="#FEA4BC" /></button>}</center>
                    </td >
                    <td width="240" height="275"></td>
                </tr>
                <tr>
                    <td width="240" height="275"></td>
                    <td width="240" height="275"></td>
                </tr>
            </thead><tbody></tbody></> : <><thead><tr><td></td></tr></thead><tbody></tbody></>
        }
        {
            list.length === 1 ?
                <><thead>
                    <tr>
                        <td width="240" height="275">
                            <center>
                                {<Team data={list[0]} />}
                            </center>
                        </td >
                        <td width="240" height="275">
                            <center>{<button onClick={onShowModal}><BsPlusCircleFill size="60" color="#FEA4BC" /></button>}</center>
                        </td>
                    </tr>
                    <tr>
                        <td width="240" height="275"></td>
                        <td width="240" height="275"></td>
                    </tr>
                </thead><tbody></tbody></> : <><thead><tr><td></td></tr></thead><tbody></tbody></>
        }
        {
            list.length === 2 ?
            <><thead>
                <tr>
                    <td width="240" height="275">
                        <center>{<Team data={list[0]} />}</center>
                    </td >
                    <td width="240" height="275">
                        <center>{<Team data={list[1]} />}</center>
                    </td>
                </tr>
                <tr>
                    <td width="240" height="275">
                        <center>{<button onClick={onShowModal}><BsPlusCircleFill size="60" color="#FEA4BC" /></button>}</center>
                    </td>
                    <td width="240" height="275"></td>
                </tr>
            </thead><tbody></tbody></> : <><thead><tr><td></td></tr></thead><tbody></tbody></>
        }
        {
            list.length === 3 ?
            <><thead>
                <tr>
                    <td width="240" height="275">
                        <center>{<Team data={list[0]} />}</center>
                    </td >
                    <td width="240" height="275">
                        <center>{<Team data={list[1]} />}</center>
                    </td>
                </tr>
                <tr>
                    <td width="240" height="275">
                        <center>{<Team data={list[2]} />}</center>
                    </td>
                    <td width="240" height="275">
                        <center>{<button onClick={onShowModal}><BsPlusCircleFill size="60" color="#FEA4BC" /></button>}</center>
                    </td>
                </tr>
            </thead><tbody></tbody></> : <><thead><tr><td></td></tr></thead><tbody></tbody></>
        }
        {
            list.length === 4 ?
            <><thead>
                <tr>
                    <td width="240" height="275">
                        <center>{<Team data={list[0]} />}</center>
                    </td >
                    <td width="240" height="275">
                        <center>{<Team data={list[1]} />}</center>
                    </td>
                </tr>
                <tr>
                    <td width="240" height="275">
                        <center>{<Team data={list[2]} />}</center>
                    </td>
                    <td width="240" height="275">
                        <center>{<Team data={list[3]} />}</center>
                    </td>
                </tr>
            </thead><tbody></tbody></> : <><thead><tr><td></td></tr></thead><tbody></tbody></>
        }
        {
            <><thead></thead>
            <tbody>
            <tr>
                <td width="240" height="27">
                    <center>
                        <GoChevronLeft size="27" color="#878787" 
                            onClick={() => {
                                if(page !== 1) {
                                    setPage(page - 1);
                                }
                            }}
                        />
                    </center>
                </td>
                <td width="240" height="27"> 
                    <center>
                        <GoChevronRight size="27" color="#878787" 
                            onClick={ () => { 
                                if(page !== maxCount) {         //즉 페이지 이동을 할 수 있는 경우,
                                    setPage(page + 1);    
                                } 
                            }}
                        />
                    </center>
                </td>
            </tr>
            </tbody></>
        }
        </table>
    )
}

export default TeamEditList;