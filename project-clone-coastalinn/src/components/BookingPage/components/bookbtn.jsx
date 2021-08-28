import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { Button } from '@material-ui/core';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { ContextApi } from '../../../context/StateContext';

 const MaterialUIPickers=({prop}) =>{
  // The first commit of Material-UI
  const {checkIninfo,handleNewcheckin} = useContext(ContextApi);
  
  
  const [selectedDate, setSelectedDate] = React.useState(prop.id?checkIninfo.check_in:checkIninfo.check_out);
  
 

  const handleDateChange = (date) => {
    
    setSelectedDate(date);
    handleNewcheckin(date,prop.id)
  };

  useEffect(()=>{
    setSelectedDate(prop.id?checkIninfo.check_in:checkIninfo.check_out);
  },[checkIninfo]);
  
  return (
    <MuiPickersUtilsProvider fontSize="small" utils={DateFnsUtils}>
      <KeyboardDatePicker fontSize="small"

style={{backgroundColor:"white"}}
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          minDate={prop.id?new Date():new Date().setDate(new Date().getDate()+2)}
          margin="none"
          label={prop.text}
          value={selectedDate}
          onChange={handleDateChange}
          InputLabelProps={{
            shrink: true,
          }}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
    </MuiPickersUtilsProvider>
  );
}


const useStyles = makeStyles({
    button: {
      margin:"auto",
      color:"white",
      fontWeight:"bold",
      height: "25px",
      width: "100px",
      backgroundColor:"rgb(91,172,182)",
      border:"1px solid rgb(81,154,163)",
      float: "right",
      textShadow:"1.5px 1.5px 0px rgb(64,144,153)"
    },
  });

const Bookbtn = ({prop}) => {
    const classes = useStyles();
    return (
        <Button startIcon={<ChevronRightIcon style={{fontSize:"10px",boxShadow:"1px 1px 0px rgb(64,144,153)"}} className="icon-chevron-right" />} style={{fontSize:"12px",textTransform:"none"}} className={classes.button}  onClick={()=>prop.fn(prop.id)}> {prop.text}</Button>
    )
}

const useStyles1 = makeStyles({
    button: {
      margin:"auto",
      color:"rgb(112,112,112)",
      fontSize:"10px",
      fontWeight:"bold",
      height: "25px",
      backgroundColor:"rgb(223,223,223)",
      border:"1px solid rgb(179,179,179)",
      textShadow:"1.5px 1.5px 0px #ffffff"
    },
  });

const PrevWeek = ({prop})=>{
         const classes = useStyles1();
    return (
        <Button className={classes.button} onClick={()=>prop.fn()} style={{fontSize:"12px",textTransform:"none"}} startIcon={<ArrowLeftIcon className="margin-r"/>} >{prop.text}</Button>
    )
}

const NextWeek = ({prop})=>{
    const classes = useStyles1();
return (
   <Button className={classes.button} onClick={()=>prop.fn()} style={{fontSize:"12px",textTransform:"none"}} endIcon={<ArrowRightIcon className="margin-l"/>} >{prop.text}</Button>
)
}

export {Bookbtn,PrevWeek,NextWeek,MaterialUIPickers}
