import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const[accessories,setAccessories]=useState([])
  const[sheets,setSheets]=useState([])
  const[secondstate,setSecondstate]=useState([])
  const[shirt,setShirt]=useState([])
  const[fourthstate,setFourthstate]=useState([])
  const[jewellery,setJewellery]=useState([])
  const[cloth,setCloth]=useState([])
  const[trouser,setTrouser]=useState([])
  const[jeans,setJeans]=useState([])
  const[gold,setGold]=useState([])
  useEffect(()=>{
    axios.get('https://d2w20tuu2vbvr.cloudfront.net/miscs/cats?orgId=1637320776228').then((response,index)=>{
      
      console.log((response.data.items.filter(item=>item.parentId.includes("ROOT-163732077622"))))
      setAccessories(response.data.items.filter(item=>item.id.includes("4732285879")&& item.parentId.includes("ROOT-1637320776228")))
      setSheets(response.data.items.filter(item=>item.parentId.includes("4732285879")))
      setSecondstate(response.data.items.filter(item=>item.parentId.includes("8528837624")))
      setShirt(response.data.items.filter(item=>item.parentId.includes("9216500594")))
    setFourthstate(response.data.items.filter(item=>item.parentId.includes("8802575827")))
    setJewellery(response.data.items.filter(item=> item.slug.includes("all-jewellery")))
    setCloth(response.data.items.filter(item=> item.slug.includes("aparels")))
    setTrouser(response.data.items.filter(item=> item.slug.includes("cat-ab")))
    setJeans(response.data.items.filter(item=>item.parentId.includes("8802575827")))
    setGold(response.data.items.filter(item=>item.slug.includes("gold-jewellery")))
    })


  },[])
  
  
  return (


    <div className="App">
      <h1>Expected Output </h1>
    <div className="firstSection">
      <div className='leftfirst'>
      {
        accessories.map((accessorie)=>{
       return(
       <ul>
       <li> {accessorie.title}-> </li>
       
       <li> {accessorie.title}-></li>
      
        <li> {accessorie.title}-></li>
        </ul>
       )
        }
        )}
        </div>
        <ul className='rightfirst'>
      

      {sheets.map((obj,index)=>
         
          <li>{obj.title}</li>
        
        )}
        </ul>
        </div>
        
        <div className="secondSection">
      <div className='leftfirst2'>
      {
        jewellery.map((obj)=>{
       return(
       <ul>
       <li> {obj.title}-></li>
       
       <li> {obj.title}-></li>
      
        </ul>
       )
        }
        )}
        </div>
        <ul className='rightfirst2'>
      
 
      {secondstate.map((obj2,index)=>
         
          <li>{obj2.title}</li>
        
        )}
        </ul>
        </div>
        <div className="thridSection">
      <div className='leftfirst3'>
      {
        cloth.map((obj)=>{
       return(
       <ul>
       <li> {obj.title}-></li>
       
       <li> {obj.title}-></li>
       <li> {obj.title}-></li>
       <li> {obj.title}-></li>
        </ul>
       )
        }
        )}
        </div>
        <ul className='rightfirst3'>
      
 
      {shirt.map((obj2,index)=>
         
          <li>{obj2.title}</li>
          
        
        )}
        {trouser.map((obj2,index)=>
         
         <li>{obj2.title}-></li>
         
         
       
       )}
       {trouser.map((obj2,index)=>
         
         <li>{obj2.title}-></li>
         
         
       
       )}
       <ul className='fouth-right'>
          {jeans.map((obj)=>
          <li>{obj.title}</li>)}       </ul>

        </ul>
        
        </div>




       

        <div className="fivthSection">
      <div className='leftfirst5'>
      {
        gold.map((obj)=>{
       return(
       <ul>
       <li> {obj.title}-></li>
       
       <li> {obj.title}-></li>
      
        </ul>
       )
        }
        )}
        </div>
        <ul className='rightfirst5'>
      
 
      {secondstate.map((obj2,index)=>
         
          <li>{obj2.title}</li>
        
        )}
        </ul>
        </div>












        
      
    </div>
  
  );
}

export default App;
