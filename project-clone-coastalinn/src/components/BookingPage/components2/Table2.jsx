
import React, { useContext } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MouseOverPopover from '../components/Hoverpop';
import { MaterialUIPickers, NextWeek, PrevWeek} from '../components/bookbtn';
import { ContextApi } from '../../../context/StateContext';
import { Typography } from '@material-ui/core';
import CustomizedSelects from './Select';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

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
  flex:{
      display: "flex",
      justifyContent:"flex-start",
  }
});



function MonthInString(item,method){
   return item.toLocaleString('default', { [method]: 'short' })
}



export default function Table2({prop}) {
    const rooms = prop;
  const classes = useStyles();
  const {checkIninfo,handleNewcheckin} = useContext(ContextApi);
  
  function Dates(n){
    var nextDay = new Date(checkIninfo.check_in);
    nextDay.setDate(new Date(checkIninfo.check_in).getDate() + n);
    return nextDay;
}

const dateArr = [
Dates(0),Dates(1),Dates(2),Dates(3),Dates(4),Dates(5),Dates(6),Dates(7),Dates(8),Dates(9),Dates(10),Dates(11),Dates(12),Dates(13),Dates(14)
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

// const handleBtnClick = (id)=>{
//     history.push(`/properties/coastalinnbeulah/booking/${id}`)
    
// }


  return (
    <TableContainer component={Paper}>

      <Table className={classes.table} aria-label="customized table">
        
              
        <TableHead>
        <StyledTableRow className="tablerow-bg">
                <TableCell className="tablerow-bg "   colSpan={2}>
               <Typography variant="caption" className={classes.flex}>Number of rooms <CustomizedSelects /> </Typography>
                </TableCell>
                <TableCell className="tablerow-bg" align="left" colSpan={1}>
               <PlayArrowIcon/>
                </TableCell>
                <TableCell className="tablerow-bg" align="center" colSpan={6}>
                    <MaterialUIPickers prop={{text:"Check In Date",id:1}}/>
                </TableCell>
                <TableCell className="tablerow-bg" align="right" colSpan={3}>
               <PlayArrowIcon/>
                </TableCell>
                <TableCell className="tablerow-bg" align="right" colSpan={6}>
                <MaterialUIPickers prop={{text:"Check Out Date",id:0}}/>
                </TableCell>
            </StyledTableRow>

            <StyledTableRow className="tablerow-bg">
                <TableCell className="tablerow-bg" colSpan={3} >
                <Typography variant="caption">Check the availability</Typography>
                </TableCell>
                <TableCell className="tablerow-bg" align="left" colSpan={4}>
                <PrevWeek prop={{text:"Week",fn:()=>handlePrev(-7)}}/><PrevWeek prop={{text:"Day",fn:()=>handlePrev(-1)}}/>
                </TableCell>
                <TableCell className="tablerow-bg" align="center" colSpan={3}>
                    {/* <MaterialUIPickers/> */}
                </TableCell>
                <TableCell className="tablerow-bg" colSpan={3}>
               
                </TableCell>
                <TableCell className="tablerow-bg" align="right" colSpan={4}>
                <NextWeek prop={{text:"Week",fn:()=>handleNext(7)}}/> <NextWeek prop={{text:"Day",fn:()=>handleNext(1)}}/>
                </TableCell>
            </StyledTableRow>
          <TableRow style={{}}>
            <StyledTableCell>Room Selection</StyledTableCell>
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
               <> {item.title}</>  
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

