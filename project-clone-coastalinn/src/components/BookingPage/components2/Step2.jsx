import React, { useContext } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import CustomizedSelects from './Select';
import { ContextApi } from '../../../context/StateContext';
import clsx from 'clsx';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "rgb(67,74,80)",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 12,
    padding:5
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
},
padding:{
    padding: 5,
}
});


function MonthInString(item,method){
    return item.toLocaleString('default', { [method]: 'short' })
 }
 

export default function Table3() {
   
  const classes = useStyles();
 
  const {bill,numRoom} = useContext(ContextApi);
 



  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        
              
        <TableHead>
            
          <TableRow style={{}}>
            <StyledTableCell>Occupancy</StyledTableCell>
<StyledTableCell align="center"><Typography style={{fontSize:"12px"}} variant="body2">Date</Typography></StyledTableCell>

<StyledTableCell align="center"><Typography style={{fontSize:"12px"}} variant="body2">Daily Inclusions</Typography></StyledTableCell>

<StyledTableCell align="center"><Typography style={{fontSize:"12px"}} variant="body2">Room <br />Rate</Typography></StyledTableCell>

<StyledTableCell align="center"><Typography style={{fontSize:"12px"}} variant="body2">Extra <br />Adult</Typography></StyledTableCell>

<StyledTableCell align="center"><Typography style={{fontSize:"12px"}} variant="body2">Extra <br />Child</Typography></StyledTableCell>

<StyledTableCell align="center"><Typography style={{fontSize:"12px"}} variant="body2">Extra <br />Infant</Typography></StyledTableCell>

<StyledTableCell align="center"><Typography style={{fontSize:"12px"}} variant="body2">Taxes</Typography></StyledTableCell>

<StyledTableCell align="center"><Typography style={{fontSize:"12px"}} variant="body2">Total</Typography></StyledTableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          
{
    numRoom.map((item,i)=>(
        bill.map((el,j)=>(
            <StyledTableRow key={j}>
              <StyledTableCell component="th" scope="row">
               {!j && <><Typography variant="caption"><b>Room {item+1}:</b></Typography>
               <div className={classes.flex}>
               <Typography variant="caption" className={classes.flex}>Adults <CustomizedSelects /> </Typography>
               <Typography variant="caption" className={classes.flex}>Children <CustomizedSelects /> </Typography>
               <Typography variant="caption" className={classes.flex}>Infants <CustomizedSelects /> </Typography>
               </div></>}
              </StyledTableCell>
              <StyledTableCell align="center">{MonthInString(el.date,'weekday')}&nbsp;&nbsp;{el.date.getDate()}&nbsp;&nbsp;{MonthInString(el.date,'month')}</StyledTableCell>
              <StyledTableCell style={{backgroundColor:"rgb(236,248,250)",width:"16%"}} align="center"></StyledTableCell>
              <StyledTableCell style={{backgroundColor:"rgb(236,248,250)",width:"2%"}} align="center">${el.price}</StyledTableCell>
              <StyledTableCell style={{backgroundColor:"rgb(236,248,250)",width:"2%"}} align="center">${el.extra}</StyledTableCell>
              <StyledTableCell style={{backgroundColor:"rgb(236,248,250)",width:"2%"}} align="center">${el.extra}</StyledTableCell>
              <StyledTableCell style={{backgroundColor:"rgb(236,248,250)",width:"2%"}} align="center">${el.extra}</StyledTableCell>
              <StyledTableCell style={{backgroundColor:"rgb(236,248,250)",width:"6%"}} align="center">${el.tax}</StyledTableCell>
              <StyledTableCell style={{backgroundColor:"rgb(236,248,250)",width:"6%"}} align="center">${el.total}</StyledTableCell>
              
            </StyledTableRow>
        ))
       
    ))
}

<StyledTableRow className={clsx(classes.padding,"tablerow-bg")}>
                <TableCell className={clsx(classes.padding,"tablerow-bg")} colSpan={9}>
               <Typography variant="subtitle1" className={classes.flex}>Totals</Typography>
                </TableCell>
            </StyledTableRow>

            <StyledTableRow className={clsx(classes.padding,"tablerow-bg")}>
            <TableCell align="left" className={clsx(classes.padding,"tablerow-bg")} colSpan={6}>
                </TableCell>
                <TableCell className={clsx(classes.padding,"tablerow-bg")}  align="right" colSpan={2}>
               <Typography variant="caption" className={classes.flex}>Room Charges <br /> Taxes </Typography>
                </TableCell>
                <TableCell className={clsx(classes.padding,"tablerow-bg")}  align="right" colSpan={1}>
               <Typography variant="subtitle2" className={classes.flex}>$438 <br />$48 </Typography>
                </TableCell>
                
            </StyledTableRow>
            <StyledTableRow className={clsx(classes.padding,"tablerow-bg")}>
            <TableCell className={clsx(classes.padding,"tablerow-bg")} align="left"  colSpan={6}>
                </TableCell>
                <TableCell className={clsx(classes.padding,"tablerow-bg")} align="right" colSpan={2}>
               <Typography variant="h6" className={classes.flex}>Grand Total </Typography>
                </TableCell>
                <TableCell className={clsx(classes.padding,"tablerow-bg")} align="right" colSpan={1}>
               <Typography variant="body1" className={classes.flex}>$480 </Typography>
                </TableCell>
                
            </StyledTableRow>

        </TableBody>
      </Table>
    </TableContainer>
  );
}
