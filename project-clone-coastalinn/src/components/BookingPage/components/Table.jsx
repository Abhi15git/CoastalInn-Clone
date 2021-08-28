import React, { useContext } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MouseOverPopover from './Hoverpop';
import {Bookbtn, MaterialUIPickers, NextWeek, PrevWeek} from './bookbtn';
import { ContextApi } from '../../../context/StateContext';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "rgb(67,74,80)",
    color: theme.palette.common.white,
    borderBottom: "2px solid white",
  },
  body: {
    fontSize: 12,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(n)': {
      backgroundColor: "rgb(226,241,246)",
      borderBottom: "2px solid white",
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 500,
    width: "100%",
    margin: "auto"
  },
});



function MonthInString(item,method){
   return item.toLocaleString('default', { [method]: 'short' })
}



export default function Tables() {
    const history = useHistory();
  const classes = useStyles();
  const {rooms,checkIninfo,handleNewcheckin,setCurrentRoom} = useContext(ContextApi);
  
  function Dates(n){
    var nextDay = new Date(checkIninfo.check_in);
    nextDay.setDate(new Date(checkIninfo.check_in).getDate() + n);
    return nextDay;
}

const dateArr = [
Dates(0),Dates(1),Dates(2),Dates(3),Dates(4),Dates(5),Dates(6),Dates(7),Dates(8),Dates(9)
];

function checkDiffDay(x){
    const date1 = new Date();
const date2 = new Date(x);
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
return diffDays;
}

const handlePrev = (x)=>{
    
     if(checkDiffDay(checkIninfo.check_in)<1 && x===-1)
     return;
     else if(x===-7 && checkDiffDay(checkIninfo.check_in)<7)
     return;
     else{
        handleNewcheckin(Dates(x),1);
     }
}

const handleNext = (x)=>{
    handleNewcheckin(Dates(x),1);
}

const handleBtnClick = (item)=>{
     setCurrentRoom(item);
    history.push(`/properties/coastalinnbeulah/booking/${item.id}`)
    
}


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        
              
        <TableHead>
            <StyledTableRow className="tablerow-bg">
                <TableCell className="tablerow-bg">
                </TableCell>
                <TableCell className="tablerow-bg" align="left" colSpan={3}>
                <PrevWeek prop={{text:"Week",fn:()=>handlePrev(-7)}}/><PrevWeek prop={{text:"Day",fn:()=>handlePrev(-1)}}/>
                </TableCell>
                <TableCell className="tablerow-bg" align="center" colSpan={4}>
                    <MaterialUIPickers prop={{text:"Date From",id:1}}/>
                </TableCell>
                <TableCell className="tablerow-bg" align="right" colSpan={4}>
                <NextWeek prop={{text:"Week",fn:()=>handleNext(7)}}/> <NextWeek prop={{text:"Day",fn:()=>handleNext(1)}}/>
                </TableCell>
            </StyledTableRow>
          <TableRow style={{}}>
            <StyledTableCell>
Prices will be charged in United States Dollars</StyledTableCell>
<StyledTableCell align="right"><Typography style={{fontSize:"12px"}} variant="body2">Full <br />Rate</Typography></StyledTableCell>
{dateArr.map((item,i) =>{
    return <StyledTableCell key={i} style={{backgroundColor:`${item.getDay()>4?"black":"rgb(67,74,80)"}`}} align="right"><Typography style={{fontSize:"10px"}} variant="body2">{MonthInString(item,'weekday')} <br /> <b style={{fontSize:"16px"}}> {item.getDate()}</b><br />{MonthInString(item,'month')}</Typography></StyledTableCell>
})}

          </TableRow>
        </TableHead>
        <TableBody>
          
{
    rooms.map((item,i)=>(
        <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
               <> {item.title}</> <Bookbtn prop={{text:"Book",fn:handleBtnClick,id:item}}/> 
              </StyledTableCell>
              <StyledTableCell style={{backgroundColor:"rgb(236,248,250)",width:"2%"}} align="right"><b>${item.price+100}</b></StyledTableCell>
              {dateArr.map((el,i) =>{
    return <MouseOverPopover key={i+'h'} props={{StyledTableCell,item,el}}/>
})}
            </StyledTableRow>
    ))
}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
