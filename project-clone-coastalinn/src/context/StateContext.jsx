import React, { createContext, useEffect, useState } from 'react';

export const ContextApi = createContext();
const StateContext = ({children}) => {
    
    const [currentRoom,setCurrentRoom] = useState(false);
    const [numRoom,setNumRoom] = useState([]);
    function callDate(n){
        
        const fullDate = new Date();
    fullDate.setDate(new Date().getDate() + n);
     return fullDate;
    
//     const month = fullDate.getMonth();
//     const date = fullDate.getDate();
//     const year = fullDate.getFullYear();
// `${date}/${month}/${year}`
    }

    const [checkIninfo,setinfo] = useState({check_in:callDate(0),check_out:callDate(3),number_adults:1});

    const [bill,setBill] = useState([]);

    const [rooms,setRooms] = useState([]);

    const [jump,setJump] = useState(false);

    function checkDiffDay(x,y){
        const date1 = new Date(x);
    const date2 = new Date(y);
    const diffTime = (date2 - date1);
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
    return diffDays
    }

    const handleNewcheckin = (x,id)=>{
        if(id){
        setinfo({...checkIninfo,check_in:x});
        if(checkDiffDay(x,checkIninfo.check_out)<2){
            let y = new Date(x);
            setinfo({...checkIninfo,check_in:x,check_out:y.setDate(x.getDate()+2)});
        }
        }
        else{
        setinfo({...checkIninfo,check_out:x});
        if(checkDiffDay(checkIninfo.check_in,x)<2){
            let y = new Date(x);
            setinfo({...checkIninfo,check_out:x,check_in:y.setDate(x.getDate()-2)})
        }
        }
    }
    
    function calcBill(){
    
        let i = new Date(checkIninfo.check_in);
        let j = new Date(checkIninfo.check_out);
        let b = [];
        while(i.getDay()!==j.getDay() || i.getDate()!==j.getDate() || i.getFullYear()!==j.getFullYear()){
            let payload = {};
            payload.date = new Date(i);
            let p = currentRoom.price;
            if(i.getDay()>4){
                p +=100;
            }
            payload.price=p;
            payload.tax = p*(.11);
            payload.extra = 0;
            payload.total = payload.price+payload.tax;
            b.push(payload);
            i.setDate(i.getDate()+1);
        }
        
        setBill(b);
    }

useEffect(()=>{
    
    calcBill();

},[checkIninfo])
    

    return (
        <ContextApi.Provider value={{checkIninfo,rooms,handleNewcheckin,setRooms,jump,setJump,setCurrentRoom,calcBill,bill,setNumRoom,numRoom}}>{children}</ContextApi.Provider>
    )
}

export default StateContext
