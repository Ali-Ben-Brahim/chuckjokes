import "./soucategorie.css"
export default function Soucategorie(){
    return(
        <div>
        <div className="souctaeg">
            <ul>
                <li style={{backgroundColor: "rgb(87, 230, 144)",borderRadius: "10px",
    padding:"0 16px" ,color: "white"}}>Social jokes</li>
                <li style={{color:"rgb(255, 145, 91)"}}>TRENDING</li>
            </ul>
            <div className="Titre">
            <h4 style={{fontSize: "28px",marginTop: "11px"}}>The Granny Joke</h4>
            <hr/>
            <h4>NO #1</h4>
            </div>
            <p>An old grandma brings a bus driver a bag of peanuts every dar.</p>
            <p>First the bus driver enjoyed the peanuts but adter a week of eating them he asked: "Please granny,don't bring me peanuts anymore.Have them yourself.".</p>
            <p>The granny answers :"You know,I don't have teeth anymore .I just prefer to suck the chocolate around them."</p>
        </div>
        <div className="like">
            <div style={{marginRight: "23px"}}>
            <img src="./hand@2x.png" style={{backgroundColor:"green" ,borderRadius: "15px",padding: "6px"}}/>
            <p style={{color:"green", marginLeft:"10px" ,marginTop: "4px"}}>328</p>
            </div>
            <div>
            <img src="./hand-copy@2x.png" style={{backgroundColor:"red" ,borderRadius: "15px",padding: "6px"}}/>
            <p style={{color:"red", marginLeft:"16px" ,marginTop: "4px"}}>98</p>  
            </div>
        </div>
        <div className="button">
        <button style={{ color:"rgb(207, 185, 149" , borderColor: "rgb(207, 185, 149",backgroundColor:" white" ,    width: "149px"}} ><img src='arrow-left@2x.png'/> PREV.JOKE</button>
        <button style={{ color:"rgb(207, 185, 149" , borderColor: "rgb(207, 185, 149" ,backgroundColor:" white",    width: "149px"}} >NEXT JOKE <img src='arrow-left-copy@2x.png'/></button>
        </div>
        </div>
    )
}