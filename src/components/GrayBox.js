import { width } from "@mui/system";

const GrayBox = ({ boxname, title, settingHeight, children, sxW={padding: "2px", display:"inline-block", width:"80%"} }) => {
    return (
        <div className={boxname} style={sxW}>
            <header style={{ textAlign: "left", backgroundColor: "#DFDFDF", padding: "0.5em 0em", borderRadius: "10px 10px 0px 0px" }}><span style={{ fontWeight: "600", paddingLeft: "1em", color: "#555555", fontSize: "1.5em" }}>{title}</span></header>
            <div style={{ height: settingHeight, backgroundColor: "#F0F0F0", borderRadius: "0px 0px 10px 10px" }}>
                {children}
            </div>
        </div>
    )
}

export default GrayBox;