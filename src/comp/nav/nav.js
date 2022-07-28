import "./nav.css"

export default function Nav(){

    return(
        <nav >
            <ul>
            <a id="a">SO FUNKTIONIERT'S</a>
            <a id="a">SONDERANGEBOTE</a>
            <div className="idn">
                <img src="./shape.png"/>
                <a id="a">MEIN BEREICH</a>
                <img src="./path_2@2x.png" style={{width: "24px",height: "14px",marginRight: "86px"}}/>
            </div>
            
            </ul>
        </nav>
    )
}