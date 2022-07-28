import axios from 'axios'
import { useEffect, useState } from 'react'
import "./box.css"
import {useNavigate} from "react-router-dom"
export default function Box (){
  const navigate = useNavigate();
const [etat,setEtat]=useState(false)
const [titre,setTitre]=useState([])
const [vanimal,setVanimal]=useState('')
const [vcareer,setVcareer]=useState('')
const [vcelebrity,setVcelebrity]=useState('')
const [vdev,setVdev]=useState('')
const [vexplicit,setVexplicit]=useState('')
const [vfashion,setVfashion]=useState('')
const [vfood,setVfood]=useState('')
const [vhistory,setVhistory]=useState('')
const [vmoney,setVmoney]=useState('')
const [vmovie,setVmovie]=useState('')
const [vmusic,setVmusic]=useState('')
const [vpolitical,setVpolitical]=useState('')
const [vreligion,setVreligion]=useState('')
const [vscience,setVscience]=useState('')
const [vsport,setVsport]=useState('')
const [vtravel,setVtravel]=useState('')

useEffect(()=>{
  axios.get("https://api.chucknorris.io/jokes/categories")
  .then(res=>{
    setTitre(res.data)
    console.log(titre)
  }).catch(err=>console.log('err'))
  axios.get("https://api.chucknorris.io/jokes/random?category=animal")
  .then(res=>{
    setVanimal(res.data.value)
  }).catch(err=>console.log("err"))
  axios.get("https://api.chucknorris.io/jokes/random?category=career")
  .then(res=>{
    setVcareer(res.data.value)
  }).catch(err=>console.log("err"))
  axios.get("https://api.chucknorris.io/jokes/random?category=celebrity")
  .then(res=>{
    setVcelebrity(res.data.value)
  }).catch(err=>console.log("err"))
  axios.get("https://api.chucknorris.io/jokes/random?category=dev")
  .then(res=>{
    setVdev(res.data.value)
  }).catch(err=>console.log("err"))
  axios.get("https://api.chucknorris.io/jokes/random?category=explicit")
  .then(res=>{
    setVexplicit(res.data.value)
  }).catch(err=>console.log("err"))
  axios.get("https://api.chucknorris.io/jokes/random?category=fashion")
  .then(res=>{
    setVfashion(res.data.value)
  }).catch(err=>console.log("err"))
  axios.get("https://api.chucknorris.io/jokes/random?category=food")
  .then(res=>{
    setVfood(res.data.value)
  }).catch(err=>console.log("err"))
  axios.get("https://api.chucknorris.io/jokes/random?category=history")
  .then(res=>{
    setVhistory(res.data.value)
  }).catch(err=>console.log("err"))
  axios.get("https://api.chucknorris.io/jokes/random?category=money")
  .then(res=>{
    setVmoney(res.data.value)
  }).catch(err=>console.log("err"))
  axios.get("https://api.chucknorris.io/jokes/random?category=movie")
  .then(res=>{
    setVmovie(res.data.value)
  }).catch(err=>console.log("err"))
  axios.get("https://api.chucknorris.io/jokes/random?category=music")
  .then(res=>{
    setVmusic(res.data.value)
  }).catch(err=>console.log("err"))
  axios.get("https://api.chucknorris.io/jokes/random?category=political")
  .then(res=>{
    setVpolitical(res.data.value)
  }).catch(err=>console.log("err"))
  axios.get("https://api.chucknorris.io/jokes/random?category=religion")
  .then(res=>{
    setVreligion(res.data.value)
  }).catch(err=>console.log("err"))
  axios.get("https://api.chucknorris.io/jokes/random?category=science")
  .then(res=>{
    setVscience(res.data.value)
  }).catch(err=>console.log("err"))
  axios.get("https://api.chucknorris.io/jokes/random?category=sport")
  .then(res=>{
    setVsport(res.data.value)
  }).catch(err=>console.log("err"))
  axios.get("https://api.chucknorris.io/jokes/random?category=travel")
  .then(res=>{
    setVtravel(res.data.value)
  }).catch(err=>console.log("err"))
},[])
return(<div>
    <div className='box'> 
    <div className='interbox'>
     <div className='Boxtitre'>
      <img src='.//green-light-copy.png'/>
      <p className='titre'>{titre[0]}</p>
     </div>
     <div className='continu'>
      {vanimal}
     </div>
    <div className='Boxfooter' onClick={()=>navigate("/soucategorie")}>
      <p style={{color:"#cfb995"}}>SEE  STATS </p>
      <img src='./path-copy-3@2x.png' className='imgfooterbox'/>
     </div>
    
     </div>
     <div className='interbox'>
     <div className='Boxtitre'>
      <img src='.//green-light-copy.png'/>
      <p className='titre'>{titre[1]}</p>
     </div>
     <div className='continu'>
      {vcareer}
     </div>
     <div className='Boxfooter' onClick={()=>navigate("/soucategorie")}>
      <p style={{color:"#cfb995"}}>SEE  STATS </p> 
      <img src='./path-copy-3@2x.png' className='imgfooterbox'/>
     </div>
     </div>
     <div className='interbox'>
     <div className='Boxtitre'>
      <img src='.//green-light-copy.png'/>
      <p className='titre'>{titre[2]}</p>
     </div>
     <div className='continu'>
      {vcelebrity}
     </div>
     <div className='Boxfooter' onClick={()=>navigate("/soucategorie")}>
      <p style={{color:"#cfb995"}}>SEE  STATS </p> 
      <img src='./path-copy-3@2x.png' className='imgfooterbox'/>
     </div>
     </div>
     </div>
     <div className='box'>
     <div className='interbox'>
     <div className='Boxtitre'>
      <img src='.//green-light-copy.png'/>
      <p className='titre'>{titre[3]}</p>
     </div>
     <div className='continu'>
      {vdev}
     </div>
     <div className='Boxfooter' onClick={()=>navigate("/soucategorie")}>
      <p style={{color:"#cfb995"}}>SEE  STATS </p> 
      <img src='./path-copy-3@2x.png' className='imgfooterbox'/>
     </div>
     </div>
     <div className='interbox'>
     <div className='Boxtitre'>
      <img src='.//green-light-copy.png'/>
      <p className='titre'>{titre[4]}</p>
     </div>
     <div className='continu'>
      {vexplicit}
     </div>
     <div className='Boxfooter' onClick={()=>navigate("/soucategorie")}>
      <p style={{color:"#cfb995"}}>SEE  STATS </p> 
      <img src='./path-copy-3@2x.png' className='imgfooterbox'/>
     </div>
     </div>
     <div className='interbox'>
     <div className='Boxtitre'>
      <img src='.//green-light-copy.png'/>
      <p className='titre'>{titre[5]}</p>
     </div>
     <div className='continu'>
      {vfashion}
     </div>
     <div className='Boxfooter' onClick={()=>navigate("/soucategorie")}>
      <p style={{color:"#cfb995"}}>SEE  STATS </p> 
      <img src='./path-copy-3@2x.png' className='imgfooterbox'/>
     </div>
     </div>
    </div>
    {
      etat ?
      <div>
       <div className='box'>
      <div className='interbox'>
      <div className='Boxtitre'>
       <img src='.//green-light-copy.png'/>
       <p className='titre'>{titre[6]}</p>
      </div>
      <div className='continu'>
       {vfood}
      </div>
      <div className='Boxfooter' onClick={()=>navigate("/soucategorie")}>
       <p style={{color:"#cfb995"}}>SEE  STATS </p> 
       <img src='./path-copy-3@2x.png' className='imgfooterbox'/>
      </div>
      </div>
      <div className='interbox'>
      <div className='Boxtitre'>
       <img src='.//green-light-copy.png'/>
       <p className='titre'>{titre[7]}</p>
      </div>
      <div className='continu'>
       {vhistory}
      </div>
      <div className='Boxfooter' onClick={()=>navigate("/soucategorie")}>
       <p style={{color:"#cfb995"}}>SEE  STATS </p> 
       <img src='./path-copy-3@2x.png' className='imgfooterbox'/>
      </div>
      </div>
      <div className='interbox'>
      <div className='Boxtitre'>
       <img src='.//green-light-copy.png'/>
       <p className='titre'>{titre[8]}</p>
      </div>
      <div className='continu'>
       {vmoney}
      </div>
      <div className='Boxfooter' onClick={()=>navigate("/soucategorie")}>
       <p style={{color:"#cfb995"}}>SEE  STATS </p> 
       <img src='./path-copy-3@2x.png' className='imgfooterbox'/>
      </div>
      </div>
      </div>
      <div className='box'>
      <div className='interbox'>
      <div className='Boxtitre'>
       <img src='.//green-light-copy.png'/>
       <p className='titre'>{titre[9]}</p>
      </div>
      <div className='continu'>
       {vmovie}
      </div>
      <div className='Boxfooter' onClick={()=>navigate("/soucategorie")}>
       <p style={{color:"#cfb995"}}>SEE  STATS </p> 
       <img src='./path-copy-3@2x.png' className='imgfooterbox'/>
      </div>
      </div>
      <div className='interbox'>
      <div className='Boxtitre'>
       <img src='.//green-light-copy.png'/>
       <p className='titre'>{titre[10]}</p>
      </div>
      <div className='continu'>
       {vmusic}
      </div>
      <div className='Boxfooter' onClick={()=>navigate("/soucategorie")}>
       <p style={{color:"#cfb995"}}>SEE  STATS </p> 
       <img src='./path-copy-3@2x.png' className='imgfooterbox'/>
      </div>
      </div>
      <div className='interbox'>
      <div className='Boxtitre'>
       <img src='.//green-light-copy.png'/>
       <p className='titre'>{titre[11]}</p>
      </div>
      <div className='continu'>
       {vpolitical}
      </div>
      <div className='Boxfooter' onClick={()=>navigate("/soucategorie")}>
       <p style={{color:"#cfb995"}}>SEE  STATS </p> 
       <img src='./path-copy-3@2x.png' className='imgfooterbox'/>
      </div>
      </div>
      </div>
      <div className='box'>
      <div className='interbox'>
      <div className='Boxtitre'>
       <img src='.//green-light-copy.png'/>
       <p className='titre'>{titre[12]}</p>
      </div>
      <div className='continu'>
       {vreligion}
      </div>
      <div className='Boxfooter' onClick={()=>navigate("/soucategorie")}>
       <p style={{color:"#cfb995"}}>SEE  STATS </p> 
       <img src='./path-copy-3@2x.png' className='imgfooterbox'/>
      </div>
      </div>
      <div className='interbox'>
      <div className='Boxtitre'>
       <img src='.//green-light-copy.png'/>
       <p className='titre'>{titre[13]}</p>
      </div>
      <div className='continu'>
       {vscience}
      </div>
      <div className='Boxfooter' onClick={()=>navigate("/soucategorie")}>
       <p style={{color:"#cfb995"}}>SEE  STATS </p> 
       <img src='./path-copy-3@2x.png' className='imgfooterbox'/>
      </div>
      </div>
      <div className='interbox'>
      <div className='Boxtitre'>
       <img src='.//green-light-copy.png'/>
       <p className='titre'>{titre[14]}</p>
      </div>
      <div className='continu'>
       {vsport}
      </div>
      <div className='Boxfooter' onClick={()=>navigate("/soucategorie")}>
       <p style={{color:"#cfb995"}}>SEE  STATS </p> 
       <img src='./path-copy-3@2x.png' className='imgfooterbox'/>
      </div>
      </div>
      </div>
      <div className='box'>
      <div className='interbox'>
      <div className='Boxtitre'>
       <img src='.//green-light-copy.png'/>
       <p className='titre'>{titre[15]}</p>
      </div>
      <div className='continu'>
       {vtravel}
      </div>
      <div className='Boxfooter' onClick={()=>navigate("/soucategorie")}>
       <p style={{color:"#cfb995"}}>SEE  STATS </p> 
       <img src='./path-copy-3@2x.png' className='imgfooterbox'/>
      </div>
      </div>
      </div>
     </div>
      :null
    }
    <button className='VIEW' onClick={()=>{setEtat(true)}}>View More <img src='path-copy-7@2x.png'/></button>
    </div>
)

}