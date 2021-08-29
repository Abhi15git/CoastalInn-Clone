import { Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, Input, InputLabel, makeStyles, NativeSelect, Select, TextareaAutosize, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react'
import { Bookbtn } from '../components/bookbtn';

const useStyles = makeStyles((theme)=>({
    root1:{
        display: "grid",
        width: "100%",
        gridTemplateColumns:"50% auto",
        gridGap:"20px",
        marginBottom:"30px",
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '90%',
        },
      },
    subroot:{
backgroundColor:"rgb(243,243,243)",
'&>div':{
    padding:"20px 40px"
}
    },
    bgwhite:{
        '& input:nth-of-type(n+1)':{
        backgroundColor:"white",
        },
        '& * label':{
            color: "black",
            fontSize:"14px",
            fontWeight:"bolder"
        }
    }
}))

const CusDetForm = () => {
    const classes = useStyles();
    const [errors,setErrors] = useState({});
    const [field,setField] = useState({});
    const [state, setState] = React.useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };

    const handleField = (e)=>{
        const {name,value} = e.target;
        if(value===""){
            setErrors({...errors,[name]:true})
        }
        else
        setErrors({...errors,[name]:false});

        if(e.target.name==="card")
        handleChange(e)
    }

    return (
        <div className={classes.root1}>
            <div className={classes.subroot}>
                <div>
                <form className={classes.root}  autoComplete="off">
<FormLabel color="secondary"><b>Guest Details</b></FormLabel>
<br />
                    <FormControl  style={{width:"100%"}} className={classes.bgwhite}>

                <TextField
      required
      error={errors.firstname?true:false}
          name="firstname"
          helperText={errors.firstname?"This is required field":""}
          label="First Name"
          style={{ margin: 8 }}
          margin="normal"
          onChange={(e)=>handleField(e)}
          onBlur={(e)=>handleField(e)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
      required
          label="Last Name"
          error={errors.lastname?true:false}
              name="lastname"
              helperText={errors.lastname?"This is required field":""}
          style={{ margin: 8 }}
          margin="normal"
          onChange={(e)=>handleField(e)}
          onBlur={(e)=>handleField(e)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
      required
      label="Email"
      error={errors.email?true:false}
          name="email"
          helperText={errors.email?"This is required field":""}
          onChange={(e)=>handleField(e)}
          onBlur={(e)=>handleField(e)}
          margin="normal"
          style={{ margin: 8 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
      required
      label="Contact number (mobile preferred)"
      error={errors.number?true:false}
          name="number"
          type="number"
          helperText={errors.number?"This is required field":""}
          onChange={(e)=>handleField(e)}
          onBlur={(e)=>handleField(e)}
          margin="normal"
          style={{ margin: 8 ,width:"65%"}}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
      label="Organisation (if applicable)"
      error={errors.org?true:false}
          name="org"
          helperText={errors.org?"This is required field":""}
          onChange={(e)=>handleField(e)}
          onBlur={(e)=>handleField(e)}
          margin="normal"
          style={{ margin: 8 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
      required
      label="Address line 1"
      error={errors.address?true:false}
          name="address"
          helperText={errors.address?"This is required field":""}
          onChange={(e)=>handleField(e)}
          onBlur={(e)=>handleField(e)}
          margin="normal"
          style={{ margin: 8 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
      label="Address line 2"
          name="address2"
          onChange={(e)=>handleField(e)}
          margin="normal"
          style={{ margin: 8 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
      required
      label="City"
      error={errors.city?true:false}
          name="city"
          helperText={errors.city?"This is required field":""}
          onChange={(e)=>handleField(e)}
          onBlur={(e)=>handleField(e)}
          margin="normal"
          style={{ margin: 8 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
      label="State"
          name="state"
          onChange={(e)=>handleField(e)}
          onBlur={(e)=>handleField(e)}
          margin="normal"
          style={{ margin: 8 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
      required
      label="Post Code"
      error={errors.postcode?true:false}
          name="postcode"
          helperText={errors.postcode?"This is required field":""}
          onChange={(e)=>handleField(e)}
          onBlur={(e)=>handleField(e)}
          margin="normal"
          style={{ margin: 8,width:"30%" }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        </FormControl>
    </form>
                    </div>
                    </div>
            <div className={classes.subroot}><div>
                
<FormLabel color="secondary"><b>Payment Details</b></FormLabel>
<br /><br />
            <FormControl  style={{width:"100%"}} className={classes.bgwhite} >

<FormControl error={errors.card?true:false} style={{marginLeft:"10px"}}>
<InputLabel htmlFor="name-native-error">Card Type</InputLabel>
<NativeSelect
        error={state.card==="false"?true:false}
          onChange={(e)=>handleField(e)}
          onBlur={(e)=>handleField(e)}
        style={{width:"40%",backgroundColor:"white"}}
        value={state.card}
          inputProps={{
            name: 'card',
            id: 'name-native-error',
          }}
        >
            <option value={false}></option>
          <option value="Visa">Visa</option>
          <option value="Mastercard">Mastercard</option>
          <option value="American Express">American Express</option>
        </NativeSelect>
        <FormHelperText>{state.card==="false"?"This is required field":""}</FormHelperText>

      </FormControl>


        <TextField
      required
      label="Card Number"
      error={errors.cardnumber?true:false}
          name="cardnumber"
          type="number"
          helperText={errors.cardnumber?"This is required field":""}
          onChange={(e)=>handleField(e)}
          onBlur={(e)=>handleField(e)}
          margin="normal"
          style={{ margin: 8 }}
          InputLabelProps={{
            shrink: true,
          }}
        />

<TextField
      required
      label="Card CVV"
      error={errors.cardcvv?true:false}
          name="cardcvv"
          type="number"
          helperText={errors.cardcvv?"This is required field":""}
          onChange={(e)=>handleField(e)}
          onBlur={(e)=>handleField(e)}
          margin="normal"
          style={{ margin: 8 }}
          InputLabelProps={{
            shrink: true,
          }}
        />

<TextField
      required
      label="Name"
      error={errors.cardname?true:false}
          name="cardname"
          helperText={errors.cardname?"This is required field":""}
          onChange={(e)=>handleField(e)}
          onBlur={(e)=>handleField(e)}
          margin="normal"
          style={{ margin: 8 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <div style={{display:"flex",alignItems:"center"}}>
        <Checkbox size="small" color="primary" name="checkedA" />
        <Typography variant="body2">I have read and accepted the <a href="#tnc">terms and conditions</a></Typography>
        </div>
<br /><br />
        <div>
            <Typography variant="caption">By selecting "Book Now" I authorise Coastal Inn Beulah to send instructions to the financial institution that issued my card to take payments from my card in accordance with the terms of my agreement with Coastal Inn Beulah.</Typography>
        </div>

        <br />

<div>
    <Bookbtn prop={{text:"Book"}}/>
</div>

</FormControl>
                </div></div>
        </div>
    )
}

export default CusDetForm

