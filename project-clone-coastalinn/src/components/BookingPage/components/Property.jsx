import React, { useContext } from 'react'
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Button, CardActionArea, CardActions, CardHeader, CardMedia, Grid, Typography } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import { ContextApi } from '../../../context/StateContext';
import { Bookbtn } from './bookbtn';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    borderRadius: 0,
  },
  content: {
    padding: 24,
  },
  grid:{
    display: "grid",
    gridTemplateColumns:"25% auto",
},
grid2:{
    display: "grid",
    gridTemplateColumns:"10% auto",
},
  flex:{
      display: "flex",
  },
  media: {
    height: 100,
    width: 100,
    outline: ".5px solid",
    outlineOffset:"4px",
  },
  media2: {
    height: 60,
    width: 60,
    outline: ".5px solid",
    outlineOffset:"6px",
  },
  spacing:{
      margin: "10px auto",
      color:"rgb(57,67,104)",
  },
  paper: {
    padding: theme.spacing(0),
    fontSize:"12px",
    color: "rgb(60,89,118)",
  },
  padding: {
    padding: "10px",
  },
  color:{
      color: "rgb(91,172,182)",
  },
  typography :{
      margin: "-10px -16px",
},
  title:{
      color: "rgb(60,89,118)",
  },
}));

const ProjectCardDemo = ()=> {
  const cardStyles = useStyles();
  const {rooms,setCurrentRoom} = useContext(ContextApi);
  const history = useHistory();
  
  const handleBtnClick = (item)=>{
    setCurrentRoom(item)
    history.push(`/properties/coastalinnbeulah/booking/${item.id}`)
    
}

  return (
    <Card className={cx(cardStyles.root)} >
      <CardHeader title="Property Information" className={cardStyles.color} titleTypographyProps={{variant:"subtitle1"}} />
      <hr />
      <div className={cx(cardStyles.grid,cardStyles.spacing)}>
      <CardContent className={cardStyles.content}>
        <Typography variant="body2" >
Coastal Inn Beulah
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
        12313834116 <br />
475 North Michigan Avenue <br />
Beulah MI 49617 United States

        </Typography>
        <br /><br />
        <Button startIcon={<RoomIcon/>} size="small"  variant="contained" style={{fontSize:"10px",textTransform:"none"}} >View Map</Button>
      </CardContent>


      <CardContent className={cx(cardStyles.content,cardStyles.spacing)}>
     <CardActions className={cx(cardStyles.flex,cardStyles.spacing)}>
     <CardMedia className={cardStyles.media} image="https://sm-pciprod-prod-lh-emea-photos.imgix.net/attachments/photos/images/Property/000/287/862/thumb/northwoods-lodging.jpg?1588615501"/>
      <CardMedia className={cardStyles.media} image="https://sm-pciprod-prod-lh-emea-photos.imgix.net/attachments/photos/images/Property/000/295/603/thumb/102422743_644360119487407_9000133336867582466_n.jpg?1593720982"/>
     </CardActions>
     <Typography variant="body2" color="textSecondary" className={cardStyles.spacing}>
     Now open! Welcome to Coastal Inn, a boutique roadside property that has been totally renovated in a bright, airy beachy vibe! Our 17 unit property features a variety of room types as well as a seasonally open outdoor pool, complimentary daily breakfast and outdoor firepit. We look forward to welcoming you this year!
     </Typography>
     <CardHeader title="Property Features" className={cardStyles.color} titleTypographyProps={{variant:"body2",className:`${cardStyles.typography}`}}/>
     <hr/>

        <Grid container item xs={12} spacing={0}>
        {
          rooms.length &&  rooms[0].features.map((element,i)=>{
                return <Grid item xs={3} className={cardStyles.paper}  fontSize="10px">
                {element}
            </Grid>
            })
        }
        </Grid>
      </CardContent>
      </div>

      <CardHeader className={cardStyles.color} title="Accommodation Details" titleTypographyProps={{variant:"body1"}} />
      <hr />

      {
          rooms.map((item,i)=>{
              return <CardContent>
                  <CardActionArea className={cardStyles.padding}>
                      <section  className={cardStyles.grid2}>
                      <div>
                          <CardActions>
                              <CardMedia className={cardStyles.media2} image={item.images[i]}/>
                              </CardActions>
                      </div>
                      <div>
                          
                          <Bookbtn prop={{text:"Book",fn:handleBtnClick,id:item}}/>
                          <CardHeader title={item.title} className={cardStyles.title} titleTypographyProps={{variant:"h6",className:`${cardStyles.typography}`}}/>
                          <Typography variant="body2" color="textSecondary">{item.quality} rate for this room</Typography>
                         
<br /> <br />
                          <Grid container item xs={12} spacing={0}>
        {
          item.features.map((element,i)=>{
                return <Grid item xs={2} key={i} className={cardStyles.paper}  fontSize="10px">
                {element}
            </Grid>
            })
        }
                          </Grid>

                      </div>
                      </section>
              </CardActionArea>
              </CardContent>
          })
      }
      
    </Card>
  );
};


const Property = () => {
    return (
        <div>
            
        </div>
    )
}

export {Property,ProjectCardDemo}
