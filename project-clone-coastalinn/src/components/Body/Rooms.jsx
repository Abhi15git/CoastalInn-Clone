import React, { useEffect, useState } from 'react';
import axios from "axios";
import styled from "./Room.module.css";
import classNames from 'classnames';
import {
   
  useHistory,
   
} from "react-router-dom";
 

const Rooms = () => {
    const Card = classNames(styled.Card, "width-less");
    const [data, setData] = useState([]);
    const history = useHistory();
     
    
    useEffect(() => {
        axios.get(`http://localhost:3001/rooms`)
            .then((res) => {
                // console.log("useEffect inside",res.data)
                setData(res.data)
            });
        
    }, []);
    // console.log("state", data)
     
     

    return (<>
        <div className={styled.heading}>
              <h1>Rooms</h1>
       </div>
         
        <div id={styled.Card} className={Card}>
           
            
            {
                data.map((item) => {
                    return (<>
                        <div className={styled.Image} >
                             
                                <a onClick={()=>history.push(`/rooms/roomdetails/${item.id}`)} > <img src={item.images} alt=""/></a>
                               
                             
                                <div className={styled.para}>
                                   <a href="/"><h2>{item.title }</h2></a>
                                <a href="/"> <p>{item.description}</p></a>
                               </div>
                            
                            
                        </div>
                        

                        </>
                )
            })
             }

        </div>
        {/* <RoomDetails/> */}
        </>
    )
}

export default Rooms
