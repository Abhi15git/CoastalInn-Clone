import React, { useState } from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Tablecell from './Tablecell';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
    backgroundColor:"black",
    aspectRatio:"220/120",
    width: "200px",
  },
  white:{
    color: "white",
    display: "flex",
    justifyContent:"space-between",
    fontSize:"14px",
  }
}));

export default function MouseOverPopover({props}) {
    
    const {StyledTableCell,item,el} = props;
    
    const [availroom,setAvailroom] = useState(item.totalroom);
    const [hover,setHover] = useState(true);

    

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);


  let tableCellColor = false

    if(el.getDay()>4){
    tableCellColor = true
    }
  
  const handlePopoverOpen = (event) => {
      if(!hover){
          setAnchorEl(null);
          return
      }

    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <StyledTableCell className={clsx("hoverGlow",`${tableCellColor?"fri-sat":""}`)} align="right" aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}><Tablecell props={{item,el,setAvailroom,setHover}}/></StyledTableCell>
      
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        {hover && <Typography className={classes.white}><div><div>Minimum Stay</div><div>Availability</div><div>Occupancy</div></div><div><div>{item.minstay}/night</div><div>{availroom}</div><div>{item.occupancy}</div></div></Typography>}
      </Popover>
    </>
  );
}

