import React from 'react'
import styled from "./Home.module.css";
import Rooms from "./Rooms.jsx";

import classNames from 'classnames';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

import 'date-fns';
 
 
 import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';

 

 


const Home = () => {
    
    const para = classNames(  "width_fotter");
    const gallery = classNames(styled.gallery, "width-gall");
    const galleryImage = classNames(styled.galleryImage, "width-custom");
    const subscribe = classNames("width-custom");
    const sub = classNames("width-custom");
    
// state for date
    
const [selectedDate, setSelectedDate] = React.useState(new Date());
const [selectedDate1, setSelectedDate1] = React.useState(new Date().setDate(new Date().getDate()+2));

// function  for date 
  const handleDateChange = (date) => {
    setSelectedDate(date);
    };
    
    const handleDateChange1 = (date) => {
    setSelectedDate1(date);
    };
    

    return (
        // main class
        <div className={styled.Main}>

            {/* Display image page  class ========>>>>>>*/}
            
            <div id={styled.HomeImage} >
                <img src="https://webbox.imgix.net/images/uokyxzaiauezoxym/c04db7ba-2972-4f16-aa19-ba568265cd8e.jpg?auto=format,compress&fit=crop&crop=entropy&w=375&h=280&q=55" alt="" />
             <div className={para } id={styled.InnerHomeImage}>
                    <img src="https://webbox.imgix.net/images/uokyxzaiauezoxym/f877c954-d66e-4977-a12b-87b2b7dc1634.png" alt="" />
                    
                    
                </div>

                {/* date and booking butoon classs =====>>>>>> */}
                
                <div className={sub} id={styled.date}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} >
                        <div  className="fullFlex" >
                            <div >
                                 <KeyboardDatePicker
                                         style={{backgroundColor:"white",borderStartStartRadius:"5px"}}
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        minDate={new Date()}
                                        label="Arrival"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                 </div>
                                <div>
                                 <KeyboardDatePicker
                                         style={{backgroundColor:"white",borderStartStartRadius:"5px"}}
                                        margin="normal"
                                        format="MM/dd/yyyy"
                                        minDate={new Date()}
                                        label="Departure"
                                        value={selectedDate1}
                                        onChange={handleDateChange1}
                                        KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                         }}
                                    />
                                </div>

                            <div id={styled.bookingSelect} >
                                <select id={styled.bookingSelect}>
                                    <option>2 guests</option>
                                    <option>1 guest</option>
                                    
                                    <option>3 guests</option>
                                    <option>4 guests</option>
                                    <option>5 guests</option>
                                </select>
                            </div>

                            <div id={styled.BookingButton}>

                                <button onClick={()=>window.open('/properties/coastalinnbeulah')}>Book Now</button>
                            </div>

                        </div>
                    </MuiPickersUtilsProvider>
                    
                     
                </div>
 
            </div>
            

            {/* A Northern Michigan beach house style getaway code =====>>>>>>>> */}

            <div className={styled.ColourBox}>
            <p>A Northern Michigan beach house style getaway</p>
            </div>

{/* Rooms code here =====>>> */}

            <div className={styled.Rooms}>  
            <Rooms/>
            </div>  


            {/* About Coastal INN part Code */}


            <div className={styled.about}>
                <img src="https://webbox.imgix.net/images/uokyxzaiauezoxym/a3457c77-b885-4934-b65d-654c832b23da.jpg?auto=format,compress&fit=crop&crop=entropy&w=1200&h=450&q=55" alt="/" />
            
            
                
                     
                    <div  className={styled.Boxx} id={styled.content}  >
                    <div className={para} id={styled.InnerBox}>
                         <h1>About Coastal Inn</h1>
                        <p>Welcome to Coastal Inn! Located just minutes from our first property,
                            Coastal Suites Resort, this wonderful Northern Michigan gem features 17 units and
                            a top-to-bottom complete renovation with an airy,
                            beach house vibe we know you’ll love! We look forward to welcoming you!</p>
                        <button>Read More -</button>
                         </div>
                    </div>
                     
                      
                </div>
                
            {/* Gallery part code =>>>>>>>> */}

            <div id={styled.MainGallery}>
                      <div> <hr></hr></div>
                <div className={gallery} >
                    
                    <h1>Gallery</h1>
                    <a href="/"  >SEE ALL - </a>
                </div>

                <div className={galleryImage}>
                    <div id={styled.effect} >
                         <a href="/"><img src="https://webbox.imgix.net/images/uokyxzaiauezoxym/7107f956-0f7d-4c84-bbde-d2609e164cc7.jpg?auto=format,compress&fit=crop&crop=entropy&w=169&h=169&q=55" alt="/" /></a>
                       
                        </div>
                    <div id={styled.effect}>
                             <a href="/"><img src="https://webbox.imgix.net/images/uokyxzaiauezoxym/0f767a47-9c02-41c1-b503-fb17597278e7.jpg?auto=format,compress&fit=crop&crop=entropy&w=169&h=169&q=55" alt="/"/></a>
                        </div>
                    <div id={styled.effect}>
                            <a href="/"> <img src="https://webbox.imgix.net/images/uokyxzaiauezoxym/b0192608-876e-42b3-b6c7-4d9afe89f67a.jpg?auto=format,compress&fit=crop&crop=entropy&w=169&h=169&q=55" alt="/"/></a>
                        </div>
                    <div id={styled.effect}>
                             <a href="/"><img src="https://webbox.imgix.net/images/uokyxzaiauezoxym/ede991eb-2be9-484f-be1a-d7043d183f75.jpg?auto=format,compress&fit=crop&crop=entropy&w=348&h=169&q=55" alt="/"/></a>
                        </div>
                    <div id={styled.effect}>
                             <a href="/"><img src="https://webbox.imgix.net/images/uokyxzaiauezoxym/ac542b44-fff2-467e-bc45-0c7b2768c1c5.jpg?auto=format,compress&fit=crop&crop=entropy&w=169&h=169&q=55" alt="/"/></a>
                        </div>
                    <div id={styled.effect}>
                            <a href="/"> <img src="https://webbox.imgix.net/images/uokyxzaiauezoxym/ee98c5de-960c-4b9d-90a0-5ade737038fe.jpg?auto=format,compress&fit=crop&crop=entropy&w=169&h=169&q=55" alt="/"/></a>
                        </div>
                    <div id={styled.effect}>
                             <a href="/"><img src="https://webbox.imgix.net/images/uokyxzaiauezoxym/7cbbb0aa-1ef2-4971-9778-a75749496c77.jpg?auto=format,compress&fit=crop&crop=entropy&w=348&h=169&q=55" alt="/"/></a>
                        </div>
                    <div id={styled.effect}>
                            <a href="/"> <img src="https://webbox.imgix.net/images/uokyxzaiauezoxym/f2d5ecac-8e1c-4f4f-9d31-db7439010d18.jpg?auto=format,compress&fit=crop&crop=entropy&w=348&h=169&q=55" alt="/"/></a>
                        </div>
                </div>
 
            </div>

 {/* Costal  SUITES   code Started ===>>>>>>>>>>>>>>>>> */}

                
          
                <div className={styled.costal}>

                    <img src="https://webbox.imgix.net/images/uokyxzaiauezoxym/5d019e93-652f-4475-840d-cd3e97fe3846.jpg" alt="/" />
                    
                    <div  id={styled.details} >
                        <h3>Can't find the room you're looking for?</h3>
                        <p>Check out our sister property down the road!</p>
                        <button>Costal Suites Resort</button>

                    </div>
                </div>
            
            {/* Connect and Subscribe part */}

            <div className={subscribe} id={styled.connect}>
                <div>
                    <h2>Connect</h2>
                    <p>Follow us on Facebook or Instagram to stay up to date with the latest updates and announcements!</p>
                    <div id={styled.face}>
                        <button>Facebook <FacebookIcon fontSize="small"  /> </button>
                        <button>Instagram <InstagramIcon fontSize="small" /></button>
                    </div>
                </div>
                <div id={styled.line}></div>
                <div>
                    <h2>Subscribe</h2>
                    <p>Enter your email address below to get updates and promotions delivered right to your inbox!</p>
                    <div id={styled.Input}>
                        <input type="email" />
                        <button>Subscribe</button>
                    </div>
                </div>

            </div>
        
        </div>
    )
}

export default Home
