import React,{ useState,useEffect } from 'react';
import Images from './Component/Images';

function App() {
let [image,setImages]=useState([]);
useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then(res=>res.json().then(data=>{
  setImages(data);
}))
},[])
  return (
    <>
     <Images data={image}/>
    </>
  )
}

export default App
