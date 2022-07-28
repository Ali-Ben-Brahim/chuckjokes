import axios from 'axios'
import { useEffect, useState } from 'react'
import "./categorie.css"
export default function Categorie(){
    const [etat,setEtat]=useState(false)
    const [titre,setTitre]=useState([])
    useEffect(()=>{
        axios.get("https://api.chucknorris.io/jokes/categories")
        .then(res=>{
          setTitre(res.data)
          console.log(titre)
        }).catch(err=>console.log('err'))
        },[])
    return(
        <div className='categorie'>
        <div className='block'>
        <button style={{ backgroundColor:"#ff5b5b" , border: "none"}}>{titre[0]}</button>
        <button style={{ backgroundColor:"#ff915b" , border: "none"}}>{titre[1]}</button>
        <button style={{ backgroundColor:"#ffbe5b" , border: "none"}}>{titre[2]}</button>
        <button style={{ backgroundColor:"#ffdf5b" , border: "none"}}>{titre[3]}</button>
        <button style={{ backgroundColor:"#8fe360" , border: "none"}}>{titre[4]}</button>
        </div>
        <div className='block'>
        <button style={{ backgroundColor:"#57e690" , border: "none"}}>{titre[5]}</button>
        <button style={{ backgroundColor:"#57dbe6" , border: "none"}}>{titre[6]}</button>
        {etat? <div>
         <button style={{ backgroundColor:"#ffbe5b" , border: "none"}}>{titre[7]}</button>
         <button style={{ backgroundColor:"#ffbe5b" , border: "none"}}>{titre[8]}</button>
        </div> :null}
       
        <button style={{ color:"rgb(207, 185, 149" , borderColor: "rgb(207, 185, 149"}} onClick={()=>{setEtat(true)}}>View More <img src='path-copy-7@2x.png'/></button>
        </div>
        {etat? <div>
            <div className='block'>
        <button style={{ backgroundColor:"#ff5b5b" , border: "none"}}>{titre[9]}</button>
        <button style={{ backgroundColor:"#ff915b" , border: "none"}}>{titre[10]}</button>
        <button style={{ backgroundColor:"#ffbe5b" , border: "none"}}>{titre[11]}</button>
        <button style={{ backgroundColor:"#ffdf5b" , border: "none"}}>{titre[12]}</button>
        <button style={{ backgroundColor:"#8fe360" , border: "none"}}>{titre[13]}</button>
        </div>
        <div className='block'>
        <button style={{ backgroundColor:"#ff5b5b" , border: "none"}}>{titre[14]}</button>
        <button style={{ backgroundColor:"#ff915b" , border: "none"}}>{titre[15]}</button>
        </div>
        </div>
        :null}
        </div>
    )
}