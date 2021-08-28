
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import classNames from 'classnames';
import styled from "./Room.module.css";

import 'date-fns';
 
 
 import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
import Rooms from "./Rooms";


const RoomDetails = () => {
    const Card = classNames(styled.Details, "width_fotter");
    const { id } = useParams();
    //console.log("iddddd",id)
    const [details, setDetails] = useState([]);




      
// state for date
    
    const [selectedDate, setSelectedDate] = React.useState(new Date("08/27/2021"));
    const [selectedDate1, setSelectedDate1] = React.useState(new Date("08/27/2021"));

// function  for date 
  const handleDateChange = (date) => {
    setSelectedDate(date);
    };
    
    const handleDateChange1 = (date) => {
    setSelectedDate1(date);
    };



    useEffect(() => {
        axios.get(`http://localhost:3001/rooms/${id}`)
            .then((res) => {
                console.log("xxxx",res.data)
                setDetails(res.data)
            })
    },[]);

    console.log("details", details.images);


    return (
        <>
            {/* <<<<<<<<<<<<<<<<<<================Image Detaild >>>>>>>>>>>>>>>>>>>>>>> */}


            <div style={{ textAlign: "center", marginTop: "3em" }}>
                
                <h1>{details.title}</h1>

                    <div id={styled.SEEALLROOMS} style={{marginTop:"5px"}}>
                        <a href="/">SEE ALL ROOMS</a>
                    </div>
            </div>
                
            
            
            <div className={Card}>
                  
                 
                <div>
                    <img src={details.images} alt="" />
                    
                            <div id={styled.MoreImage}>
                                {
                                    // details.images.map((e) => {
                                    //     return (
                                    //         <div>
                                    //             <img src={e} alt=""/>
                                    //         </div>
                                    //     )
                                    // })
                                }
                            </div>
                    
                    <p>{details.description}</p>
                </div>

                
                {/* <<<<<<<<<<<<<<<<<<<<===========Booking Card =========>>>>>>>>>>>>>>>> */}
                
                <div className={styled.BookingDiv}>
                     <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <div  className={styled.dateTime} >
                            <div>
                                 <KeyboardDatePicker
                                         
                                        variant="inline"
                                        format="dd/MM/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="ARRIVAL"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                 </div>
                                <div>
                                 <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog"
                                         label="DEPARTURE"
                                        format="dd/MM/yyyy"
                                        value={selectedDate1}
                                        onChange={handleDateChange1}
                                        KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                         }}
                                    />
                                </div>

                            <div id={styled.bookingSelect} >
                                <select id={styled.bookingSelect} label="GUESTS">
                                    <option>2 guests</option>
                                    <option>1 guest</option>
                                    
                                    <option>3 guests</option>
                                    <option>4 guests</option>
                                    <option>5 guests</option>
                                </select>
                            </div>

                            <div id={styled.BookingButton}>
                                <button>Book Now</button>
                            </div>

                        </div>
                    </MuiPickersUtilsProvider>
                    
                </div>

           </div>
            <Rooms/>

        </>
    )
};
export default RoomDetails;