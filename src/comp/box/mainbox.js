import axios from 'axios'
import { useEffect, useState } from 'react'
import Box from './box'

export default function Mainbox(){
    const [value,setValue]=useState('')
    const [titre,setTitre]=useState([])
useEffect(()=>{
    axios.get("https://api.chucknorris.io/jokes/random?category=animal")
  .then(res=>{
    setValue(res.data.value)
    console.log(value)
  }).catch(err=>console.log("err"))

  axios.get("https://api.chucknorris.io/jokes/categories")
  .then(res=>{
    setTitre(res.data)
    console.log(titre)
  }).catch(err=>console.log('err'))
},[])
 return(
    <div>
<Box titre={titre[0]} value={value}/>
    </div>)
}