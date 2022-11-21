import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';



function App() {
  const[accessories,setAccessories]=useState([])
  const[sheets,setSheets]=useState([])
  const[bangle,setBangle]=useState([])
  const[shirt,setShirt]=useState([])
  const[fourthstate,setFourthstate]=useState([])
  const[jewellery,setJewellery]=useState([])
  const[cloth,setCloth]=useState([])
  const[trouser,setTrouser]=useState([])
  const[jeans,setJeans]=useState([])
  const[gold,setGold]=useState([])
  const url="https://d2w20tuu2vbvr.cloudfront.net/miscs/cats?orgId=1637320776228"
  useEffect(()=>{
    axios.get(url).then((response,index)=>{
      
      console.log((response.data.items.filter(item=>item.parentId.includes("ROOT-163732077622"))))
      setAccessories(response.data.items.filter(item=>item.id.includes("4732285879")&& item.parentId.includes("ROOT-1637320776228"))) //accessories  api
        setSheets(response.data.items.filter(item=>item.parentId.includes("4732285879"))) //different table sheet towel api link
      setBangle(response.data.items.filter(item=>item.parentId.includes("8528837624"))) //bangle api link
      setShirt(response.data.items.filter(item=>item.parentId.includes("9216500594"))) //shirt api link
    setJewellery(response.data.items.filter(item=> item.slug.includes("all-jewellery")))  //jewellery api link
    setCloth(response.data.items.filter(item=> item.slug.includes("aparels"))) //cloth api link
    setTrouser(response.data.items.filter(item=> item.slug.includes("cat-ab"))) //trouser link
    setJeans(response.data.items.filter(item=>item.parentId.includes("8802575827"))) //jeans and pants link
    setGold(response.data.items.filter(item=>item.slug.includes("gold-jewellery")))   //gold api lin//
  
  

  },[])})
  
  
  return (
    

    <div className="App">






      <div className='first'>
      <h2>Expected Output</h2>
     {sheets.map((item1)=>
     <div>{accessories.map((item)=><t>{item.title}</t>)}-&gt;{item1.title}</div>)}
       
      </div>
      <br/>
      <div className='Second'>
      {bangle.map((item1)=>
      <div>{jewellery.map((item)=><t>{item.title}</t>)}-&gt;{item1.title}</div>)}
      </div>
      <br/>
      <div className='thrid'>
      {shirt.map((item1)=>
      <div>{cloth.map((item)=><t>{item.title}</t>)}-&gt;{item1.title}</div>)}
      {jeans.map((item2)=>
     
      <div>{cloth.map((item)=><t>{item.title}</t>)}-&gt;{trouser.map((item1)=><t>{item1.title}</t>)}-&gt;{item2.title}</div>)}
        
       


      </div>
      <br/>
      <div className='forth'>
      {bangle.map((item1)=>
      <div>{gold.map((item)=><t>{item.title}</t>)}-&gt;{item1.title}</div>)}
      </div>

        
      
    </div>
    
  );
}
// this is work mainly there were inner div and  outer div.The mainly  the inner work depends  on outer div  

export default App;
