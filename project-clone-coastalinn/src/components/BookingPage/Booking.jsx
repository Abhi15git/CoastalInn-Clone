import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RoomDetail from './components2/RoomDetail';
import Table3 from './components2/Step2';
import Table2 from './components2/Table2';

const Booking = () => {
    const {id} = useParams();
    const [item,setItem] = useState([]);
    
    useEffect(()=>{
        axios.get(` http://localhost:3001/rooms?id=${id}`).then(res=>setItem(res.data))
    } ,[])

    return (
        <div className="width-custom">
           <RoomDetail prop={item}/>
           <div style={{display:"flex",padding:"10px",alignItems:"center"}}><div style={{backgroundColor:"rgb(72,161,171)",color:"white",padding:"2px 5px",borderRadius:"4px"}}>Step 1</div> &nbsp;&nbsp;<div style={{color:"rgb(67,74,80)"}}><b>Select the number of rooms and stay dates - use grid below to check availability</b></div></div>
           <Table2 prop={item}/>
           <div style={{display:"flex",padding:"10px",alignItems:"center"}}><div style={{backgroundColor:"rgb(72,161,171)",color:"white",padding:"2px 5px",borderRadius:"4px"}}>Step 2</div> &nbsp;&nbsp;<div style={{color:"rgb(67,74,80)"}}><b>Choose room occupants and optional extras</b></div></div>
           <Table3 />
           <div style={{display:"flex",padding:"10px",alignItems:"center"}}><div style={{backgroundColor:"rgb(72,161,171)",color:"white",padding:"2px 5px",borderRadius:"4px"}}>Step 3</div> &nbsp;&nbsp;<div style={{color:"rgb(67,74,80)"}}><b>Enter guest and payment details</b></div></div>
          
        </div>
    )
}

export default Booking
