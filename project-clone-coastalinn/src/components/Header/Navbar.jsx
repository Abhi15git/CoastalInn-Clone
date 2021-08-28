import React from 'react'
import { Link } from 'react-router-dom'
import styles from "..//../Cssmodules/Navbar.module.css"
import classNames from 'classnames';
 
import PhoneAndroid from '@material-ui/icons/PhoneAndroid';
 

const Navbar = () => {
    const nav = classNames(styles.nav, "width-custom");
    const footer=classNames(styles.footer,"width_fotter");
    return (<>
        <div className={nav} >
             
            <div id={styles.flex_cont}>

                    <div classNames={styles.flex_item}>
                        <img src="https://webbox.imgix.net/images/uokyxzaiauezoxym/e99c22d8-07a7-4965-822a-a7db2b0cd7b2.png?auto=format,compress&fit=crop&crop=entropy&h=80&q=55" alt=""/> 
                </div>
                
                <div classNames={styles.flex_item1} id={styles.item1}>
                     <a   href="/"><PhoneAndroid fontSize="small" />231-383-4295</a> 
                    
                    <button>Book Now</button>
                        
                        
                </div>
         </div> 
           
        </div>
         <hr></hr>
             


        <div className={footer} id={styles.options}>
            
          
            <Link to="/">HOME</Link>
            
            
            <Link to="/rooms">ROOMS</Link>
            
           
            <Link to="/about">ABOUT US</Link>
            
            
            <Link to="/faq">FAQ AND PROPERTY INFO</Link>
            
            
            <Link to="/aboutthearea">ABOUT THE AREA</Link>
            
           
            <Link to="/aboutthearea">ABOUT THE AREA</Link>
            
            
            <Link to="/contact">CONTACT US</Link>
            
            
            <Link to="/more">MORE</Link>
            
            </div>
            
            <hr></hr>
              
         
    </>
    )
}

export default Navbar
