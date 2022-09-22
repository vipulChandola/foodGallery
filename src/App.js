

import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Parent from './bodybuilding/Parent';
import Navbar from './comp/Navbar';
import Gallery from './food/Gallery';
import Navbars from './Nav/Navbars';

function App() {
//   const options = {
   
//     headers: {
//       'X-RapidAPI-Key': 'b1f94988damshed5de3ef6dc6be6p130554jsn03034e63ffd8',
//       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//     }
//   };
//   useEffect(()=>{
// const a=async()=>{
//   let b=await fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',options)
//   let res= await b.json()
//   console.log(res)
// }
// a()
//   },[])
  return (
    <>
 
<Parent/>
 <BrowserRouter>
 <Navbars/> 
   <Navbar/> 
 </BrowserRouter>
    </>
 
  );
}

export default App;
