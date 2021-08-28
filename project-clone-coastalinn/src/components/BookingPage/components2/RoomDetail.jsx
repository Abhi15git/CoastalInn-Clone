import { Card, makeStyles } from '@material-ui/core'
import { CardContent, CardActionArea, CardActions, CardHeader, CardMedia, Grid, Typography } from '@material-ui/core';


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

const RoomDetail = ({prop}) => {
    const rooms = prop;
    const cardStyles = useStyles()
    return (
        <div>
            <Card>
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
            <br />
        </div>
    )
}

export default RoomDetail
